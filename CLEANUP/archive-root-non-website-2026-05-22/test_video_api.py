
import requests
import time

API_KEY = "sk-aeb079e26c31446c9725ac75ae47db16"
API_HOST = "https://ws-95x7yp5qphppzt82.ap-southeast-1.maas.aliyuncs.com"

# Try different endpoints
endpoints = [
    f"{API_HOST}/api/v1/services/aigc/video-generation/video-synthesis",
    f"{API_HOST}/api/v1/services/aigc/text2video/video-synthesis",
]

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "X-DashScope-Async": "enable"
}

# Models to try
models_to_try = [
    "wanx2.1-t2v-turbo",
    "wanx2.1-i2v-turbo", 
    "cogvideox-2b",
    "wan2.6-t2v",
    "wan2.1-t2v-turbo",
]

payload = {
    "input": {
        "prompt": "Cinematic shot of chef at luxury Bali villa, golden hour, professional food cinematography",
        "negative_prompt": "blurry, low quality"
    },
    "parameters": {
        "size": "1280*720",
        "duration": 5
    }
}

for endpoint in endpoints:
    print(f"\nTrying endpoint: {endpoint}")
    for model in models_to_try:
        payload["model"] = model
        print(f"  Model: {model}... ", end="", flush=True)
        
        resp = requests.post(endpoint, headers=headers, json=payload, timeout=30)
        print(f"{resp.status_code}")
        
        if resp.status_code == 200:
            data = resp.json()
            print(f"  SUCCESS! Response: {data}")
            break
        else:
            print(f"  {resp.text[:100]}")
    
    if resp.status_code == 200:
        break
