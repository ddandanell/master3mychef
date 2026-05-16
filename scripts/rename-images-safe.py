#!/usr/bin/env python3

import json
import os
import re
from pathlib import Path

# Load the mapping
with open('IMAGE_RENAME_MAPPING.json') as f:
    data = json.load(f)

mappings = data['mappings']
app_root = Path.cwd()

print("Phase 1: File System Renames")
print("=" * 80)

renames_done = 0
renames_skipped = 0
renames_failed = []

for old_path, new_mapping in sorted(mappings.items()):
    new_path = new_mapping['new_path']
    old_full = app_root / old_path.lstrip('/')
    new_full = app_root / new_path.lstrip('/')
    
    # Skip if already same
    if str(old_full) == str(new_full):
        renames_skipped += 1
        continue
    
    # Skip if old file doesn't exist
    if not old_full.exists():
        # print(f"⊘ Skip (not found): {old_path}")
        renames_skipped += 1
        continue
    
    # Skip if new file already exists
    if new_full.exists():
        # print(f"⊘ Skip (target exists): {new_path}")
        renames_skipped += 1
        continue
    
    # Create parent directory if needed
    new_full.parent.mkdir(parents=True, exist_ok=True)
    
    try:
        os.rename(str(old_full), str(new_full))
        print(f"✓ {Path(old_path).name:<40} → {Path(new_path).name}")
        renames_done += 1
    except Exception as e:
        print(f"✗ Error renaming {old_path}: {e}")
        renames_failed.append((old_path, str(e)))

print(f"\n✅ Completed: {renames_done} files renamed")
print(f"⊘ Skipped: {renames_skipped} files")
if renames_failed:
    print(f"✗ Failed: {len(renames_failed)} files")
    for old_path, error in renames_failed[:5]:
        print(f"  - {old_path}: {error}")

print("\n" + "=" * 80)
print("Phase 2: TypeScript Reference Updates")
print("=" * 80)

# Find all TypeScript files
ts_files = list(app_root.glob('src/**/*.tsx')) + list(app_root.glob('src/**/*.ts'))
print(f"Scanning {len(ts_files)} TypeScript files...\n")

updates_made = {}
refs_updated = 0

for ts_file in ts_files:
    content = ts_file.read_text()
    original_content = content
    
    # For each mapping, replace old path with new path
    for old_path, new_mapping in mappings.items():
        new_path = new_mapping['new_path']
        old_basename = Path(old_path).name
        new_basename = Path(new_path).name
        
        # Only update if old file was actually renamed
        if old_path in [m[0] for m in renames_failed]:
            continue
        
        old_basename_no_ext = old_basename.rsplit('.', 1)[0]
        
        # Handle various import/reference patterns
        # Pattern 1: Direct path import
        pattern1 = re.compile(re.escape(old_path))
        if pattern1.search(content):
            content = pattern1.sub(new_path, content)
        
        # Pattern 2: Filename reference
        pattern2 = re.compile(r"['\"]([^'\"]*)" + re.escape(old_basename) + r"['\"]")
        if pattern2.search(content):
            matches = pattern2.findall(content)
            for match in matches:
                old_full_ref = match + old_basename
                new_full_ref = match.replace(Path(old_path).parent.name + '/', 
                                            Path(new_path).parent.name + '/')
                new_full_ref = new_full_ref.rsplit(old_basename, 1)[0] + new_basename
                content = content.replace(old_full_ref, new_full_ref)
    
    # If content changed, save it
    if content != original_content:
        ts_file.write_text(content)
        refs_updated += 1
        updates_made[str(ts_file.relative_to(app_root))] = 1
        print(f"✓ Updated: {ts_file.relative_to(app_root)}")

print(f"\n✅ Reference updates: {refs_updated} files modified")

# Save summary
summary = {
    'files_renamed': renames_done,
    'files_skipped': renames_skipped,
    'files_failed': len(renames_failed),
    'typescript_files_updated': refs_updated,
    'timestamp': str(__import__('datetime').datetime.now().isoformat())
}

with open('RENAME_EXECUTION_SUMMARY.json', 'w') as f:
    json.dump(summary, f, indent=2)

print("\n" + "=" * 80)
print("SUMMARY")
print("=" * 80)
print(json.dumps(summary, indent=2))

