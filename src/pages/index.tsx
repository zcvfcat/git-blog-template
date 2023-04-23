import { BaseLayout } from 'layouts/base.layout'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>타이틀</title>
      </Head>
      <BaseLayout>HOME</BaseLayout>
    </>
  )
}
