#!/usr/bin/env python3
"""Submit money URLs to Bing (URL submission + IndexNow) after deploy."""
from __future__ import annotations
import json, os, ssl, urllib.parse, urllib.request
from pathlib import Path
try:
  import certifi
  CTX=ssl.create_default_context(cafile=certifi.where())
except Exception:
  CTX=ssl.create_default_context()

URLS=[
  "https://mychef.id/",
  "https://mychef.id/private-chef-bali",
  "https://mychef.id/bali-wedding-catering-packages",
  "https://mychef.id/private-chef/canggu",
  "https://mychef.id/private-chef/seminyak",
  "https://mychef.id/private-chef/ubud",
  "https://mychef.id/locations/canggu",
  "https://mychef.id/blog/private-chef-cost-bali",
  "https://mychef.id/in-villa-service/butlers",
  "https://mychef.id/catering/bbq-catering",
]

def load_env():
  env={}
  p=Path.home()/'.config/claude-seo/bing-webmaster.env'
  for line in p.read_text().splitlines():
    if '=' in line and not line.strip().startswith('#'):
      k,v=line.split('=',1); env[k.strip()]=v.strip()
  return env

def main():
  env=load_env()
  key=env.get('BING_WEBMASTER_API_KEY','')
  indexnow=env.get('BING_INDEXNOW_KEY','')
  site=env.get('BING_SITE_URL','https://mychef.id/')
  results=[]
  # Bing SubmitUrl batch via GetUrlInfo is not submit - use SubmitUrl
  for u in URLS:
    q=urllib.parse.urlencode({'apikey':key,'siteUrl':site,'url':u})
    url=f'https://ssl.bing.com/webmaster/api.svc/json/SubmitUrl?{q}'
    try:
      req=urllib.request.Request(url, method='POST', data=b'', headers={'Content-Length':'0'})
      with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
        results.append({'url':u,'bing_submit':r.status, 'body':r.read()[:200].decode()})
    except Exception as e:
      body=e.read().decode()[:200] if hasattr(e,'read') else str(e)
      results.append({'url':u,'bing_submit':'err','body':body})
  # IndexNow
  if indexnow:
    payload=json.dumps({
      "host":"mychef.id",
      "key":indexnow,
      "keyLocation":f"https://mychef.id/{indexnow}.txt",
      "urlList":URLS,
    }).encode()
    try:
      req=urllib.request.Request(
        'https://api.indexnow.org/indexnow',
        data=payload,
        headers={'Content-Type':'application/json; charset=utf-8'},
        method='POST',
      )
      with urllib.request.urlopen(req, timeout=45, context=CTX) as r:
        results.append({'indexnow':r.status, 'body':r.read()[:200].decode()})
    except Exception as e:
      body=e.read().decode()[:300] if hasattr(e,'read') else str(e)
      results.append({'indexnow':'err','body':body})
  print(json.dumps({'ok':True,'results':results}, indent=2))

if __name__=='__main__':
  main()
