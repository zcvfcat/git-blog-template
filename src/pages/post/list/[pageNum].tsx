import { BaseLayout } from 'layouts/base.layout'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function PostList() {
  const router = useRouter()
  const pageNum = Number(router.query.pageNum ?? 0)
  return (
    <>
      <Head>
        <title>포스팅</title>
      </Head>
      <BaseLayout>{pageNum}</BaseLayout>
    </>
  )
}
