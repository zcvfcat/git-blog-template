import { cookies } from 'config/cookies.singleton'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang={cookies.get('lang') ?? 'ko'}>
      <Head />
      <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
