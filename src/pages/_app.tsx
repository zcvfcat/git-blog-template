import type { AppContext, AppInitialProps, AppProps } from 'next/app'
import { setCookiesSingleton } from 'config/cookies.singleton'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'jotai'
import { SWRConfig } from 'swr'

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig /** @desc 통신모듈 */ value={{ refreshInterval: 3000 }}>
      <Provider /** @desc 상태관리 */>
        <CookiesProvider /** @desc cookies */ cookies={pageProps.cookies}>
          <Component /** @desc 컴포넌트 */ {...pageProps} />
        </CookiesProvider>
      </Provider>
    </SWRConfig>
  )
}

NextApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
  const cookies = setCookiesSingleton(ctx.req?.headers.cookie)
  return { pageProps: { ...pageProps, cookies } }
}

// NextApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const cookies = setCookiesSingleton(ctx.req?.headers.cookie)
//   return { ...appProps, cookies }
// }
