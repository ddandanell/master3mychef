#!/bin/bash

echo "🗑️  Image Cleanup - Removing Unused Files"
echo "=========================================="
echo ""

# Get used images from audit
USED=$(node -e "
const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('./reports/image-audit.json', 'utf8'));
const used = new Set();
Object.values(audit.images)
  .filter(img => img.usageCount > 0)
  .forEach(img => {
    const name = img.path.split('/').pop();
    used.add(name);
  });
console.log(JSON.stringify(Array.from(used)));
")

DELETED=0
FREED=0

# Function to delete if not in used set
cleanup_dir() {
  local dir=$1
  local pattern=$2
  
  find "$dir" -type f -name "$pattern" | while read file; do
    filename=$(basename "$file")
    if ! echo "$USED" | grep -q "\"$filename\""; then
      size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
      rm -f "$file"
      echo "  ✓ Deleted: $file ($(( size / 1024 ))KB)"
      ((FREED += size))
      ((DELETED += 1))
    fi
  done
}

# Cleanup generated folder
echo "Removing unused from /public/generated/..."
cleanup_dir "public/generated" "*.webp"
cleanup_dir "public/generated" "*.jpg"
cleanup_dir "public/generated" "*.png"
cleanup_dir "public/generated" "*.svg"
cleanup_dir "public/generated/catering" "*.*"
cleanup_dir "public/generated/events" "*.*"

echo ""
echo "Removing unused from /public root..."
cleanup_dir "public" "*.webp"
cleanup_dir "public" "*.jpg"
cleanup_dir "public" "*.png"

echo ""
echo "Removing legacy from /public/images/..."
cleanup_dir "public/images" "*.webp"
cleanup_dir "public/images" "*.jpg"
cleanup_dir "public/images" "*.png"

echo ""
echo "=========================================="
echo "✓ Cleanup complete!"
