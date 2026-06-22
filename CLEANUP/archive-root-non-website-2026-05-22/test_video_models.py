
import requests

API_KEY = "sk-aeb079e26c31446c9725ac75ae47db16"
API_HOST = "https://ws-95x7yp5qphppzt82.ap-southeast-1.maas.aliyuncs.com"

# Try OpenAI-compatible endpoint for video models
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# List models
url = f"{API_HOST}/compatible-mode/v1/models"
resp = requests.get(url, headers=headers, timeout=30)
print(f"Models endpoint: {resp.status_code}")
print(resp.text[:2000] if resp.status_code == 200 else f"Error: {resp.text}")

# Also try DashScope endpoint
url2 = f"{API_HOST}/api/v1/services/aigc/text2video/video-synthesis"
headers2 = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "X-DashScope-Async": "enable"
}

payload = {
    "model": "cogvideox-plus",
    "input": {
        "prompt": "A chef cooking at a luxury villa"
    },
    "parameters": {
        "size": "720*1280",
        "duration": 5
    }
}

print("\nTrying cogvideox-plus...")
resp2 = requests.post(url2, headers=headers2, json=payload, timeout=60)
print(f"Status: {resp2.status_code}")
print(f"Response: {resp2.text}")
