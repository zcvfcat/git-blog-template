import { Cookies } from 'react-cookie'

class CookiesSingleton {
  private static instance: Cookies

  public static setCookies(cookies: Cookies | string | undefined) {
    CookiesSingleton.instance = new Cookies(cookies)
  }

  public static getInstance() {
    if (!CookiesSingleton.instance) CookiesSingleton.instance = new Cookies()
    return CookiesSingleton.instance
  }
}

export const setCookiesSingleton = CookiesSingleton.setCookies
export const cookies = CookiesSingleton.getInstance()
