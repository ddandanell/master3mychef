
import requests
import json
import time
import os
import sys

# Config
API_KEY = "sk-aeb079e26c31446c9725ac75ae47db16"
API_HOST = "https://ws-95x7yp5qphppzt82.ap-southeast-1.maas.aliyuncs.com"
BASE_URL = f"{API_HOST}/api/v1"

# Headers
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "X-DashScope-Async": "enable"
}

# myCHEF hero video prompt - cinematic, selling, fits brand
PROMPT = (
    "Cinematic slow-motion shot of a professional chef plating an elegant dish "
    "at a luxury Bali villa at golden hour. Soft tropical breeze, lush greenery, "
    "warm golden lighting, steam rising from the food, elegant table setting with candles. "
    "Ultra HD, professional food cinematography, 4K, smooth camera pan, "
    "luxury hospitality aesthetic, 5 seconds duration"
)

print("Generating myCHEF hero video...")
print(f"Model: wanx2.1-t2v-turbo")
print(f"Prompt: {PROMPT[:100]}...")

# Submit task
payload = {
    "model": "wanx2.1-t2v-turbo",
    "input": {
        "prompt": PROMPT,
        "negative_prompt": "blurry, low quality, amateur, shaky, dark, poorly lit"
    },
    "parameters": {
        "size": "1280*720",
        "duration": 5,
        "resolution": "720p",
        "camera_control": {
            "camera_motion": "pan_right",
            "camera_angle": "medium_shot"
        }
    }
}

print("\n[1/3] Submitting task to DashScope...")
response = requests.post(
    f"{BASE_URL}/services/aigc/video-generation/video-synthesis",
    headers=headers,
    json=payload,
    timeout=60
)

print(f"Status: {response.status_code}")
print(f"Response: {response.text}")

if response.status_code == 200:
    data = response.json()
    task_id = data.get("output", {}).get("task_id")
    
    if not task_id:
        print("ERROR: No task_id returned")
        sys.exit(1)
    
    print(f"\nTask ID: {task_id}")
    print("[2/3] Waiting for video generation (this may take 2-5 minutes)...")
    
    # Poll
    max_retries = 40
    wait_time = 15
    
    for i in range(max_retries):
        time.sleep(wait_time)
        
        status_url = f"{BASE_URL}/tasks/{task_id}"
        status_resp = requests.get(status_url, headers=headers, timeout=30)
        
        if status_resp.status_code == 200:
            status_data = status_resp.json()
            task_status = status_data.get("output", {}).get("task_status", "UNKNOWN")
            print(f"  Poll {i+1}/{max_retries}: {task_status}")
            
            if task_status == "SUCCEEDED":
                video_url = status_data.get("output", {}).get("video_url", "")
                print(f"\n[3/3] Video generated! Downloading...")
                print(f"URL: {video_url}")
                
                # Download
                vid_resp = requests.get(video_url, timeout=300)
                
                if vid_resp.status_code == 200:
                    output_dir = "/Users/openclaw/Downloads/MYCHEF . MASTER/app/public/generated"
                    base_name = "mychef-hero-video"
                    output_path = os.path.join(output_dir, f"{base_name}.mp4")
                    
                    with open(output_path, "wb") as f:
                        f.write(vid_resp.content)
                    
                    file_size_mb = os.path.getsize(output_path) / (1024 * 1024)
                    print(f"\nSaved: {output_path}")
                    print(f"Size: {file_size_mb:.2f} MB")
                    
                    if file_size_mb > 5:
                        print("\nOptimizing with ffmpeg...")
                        opt_path = os.path.join(output_dir, f"{base_name}-optimized.mp4")
                        cmd = (
                            f'ffmpeg -y -i "{output_path}" '
                            f'-c:v libx264 -preset fast -crf 28 '
                            f'-c:a aac -b:a 128k '
                            f'-movflags +faststart '
                            f'-vf "scale=1280:720" '
                            f'"{opt_path}"'
                        )
                        result = os.system(cmd)
                        
                        if result == 0:
                            opt_size = os.path.getsize(opt_path) / (1024 * 1024)
                            print(f"Optimized: {opt_path}")
                            print(f"Optimized size: {opt_size:.2f} MB")
                            print(f"SUCCESS!")
                        else:
                            print("Optimization failed, keeping original.")
                    else:
                        print("File size OK.")
                        print("SUCCESS!")
                    
                    sys.exit(0)
                else:
                    print(f"Download failed: {vid_resp.status_code}")
                    sys.exit(1)
            elif task_status in ["FAILED", "CANCELED"]:
                print(f"Task failed: {status_data}")
                sys.exit(1)
        else:
            print(f"Poll failed: {status_resp.status_code}")
    
    print("Timeout reached.")
else:
    print(f"Error: {response.status_code}")
    print(response.text)

sys.exit(1)
