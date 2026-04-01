interface Props {
  /**
   * Number of seconds till expiration
   */
  time?: number
}

export function setCookie(name: string, value: string, opts?: Props): void {
  const d = new Date()
  d.setTime(d.getTime() + (opts?.time || 30 * 24 * 60 * 60) * 1000)
  const options = {
    path: '/',
    expires: d.toUTCString(),
  }

  value = encodeURIComponent(value)

  document.cookie = Object.entries(options).reduce(
    (str, [name, value]) => {
      return str + '; ' + name + '=' + value
    },
    name + '=' + value,
  )
}

// возвращает cookie с именем name, если есть, если нет, то undefined
export function getCookie(name: string): string | undefined {
  const matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
  )
  return matches !== null ? decodeURIComponent(matches[1]) : undefined
}
