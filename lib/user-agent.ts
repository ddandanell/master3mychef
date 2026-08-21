export type DeviceProfile = {
  device_category: 'mobile' | 'tablet' | 'desktop'
  os_name: string
  browser: string
}

export function parseUserAgent(ua: string | undefined): DeviceProfile {
  const raw = ua || ''
  const lower = raw.toLowerCase()
  let device_category: DeviceProfile['device_category'] = 'desktop'
  if (/ipad|tablet|playbook|silk/i.test(raw)) device_category = 'tablet'
  else if (/mobile|iphone|ipod|android.+mobile|windows phone/i.test(raw)) device_category = 'mobile'

  let os_name = 'unknown'
  if (/windows/i.test(raw)) os_name = 'Windows'
  else if (/android/i.test(raw)) os_name = 'Android'
  else if (/iphone|ipad|ipod|ios/i.test(raw)) os_name = 'iOS'
  else if (/mac os x|macintosh/i.test(raw)) os_name = 'macOS'
  else if (/linux/i.test(raw)) os_name = 'Linux'

  let browser = 'unknown'
  if (/edg\//i.test(raw)) browser = 'Edge'
  else if (/chrome|crios/i.test(raw) && !/edg\//i.test(raw)) browser = 'Chrome'
  else if (/safari/i.test(raw) && !/chrome|crios|android/i.test(lower)) browser = 'Safari'
  else if (/firefox|fxios/i.test(raw)) browser = 'Firefox'
  else if (/samsungbrowser/i.test(raw)) browser = 'Samsung Internet'

  return { device_category, os_name, browser }
}
