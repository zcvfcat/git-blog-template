import { BaseLayout } from 'layouts/base.layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>타이틀</title>
      </Head>
      <BaseLayout>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Latest
            </h1>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">사이트 정보</p>
          </div>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li key="key" className="py-12">
              <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={new Date(1682350156327).toISOString()}>
                        {new Date(1682350156327).toLocaleDateString('ko', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-5 xl:col-span-3">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <Link href="/blog/slug" className="text-gray-900 dark:text-gray-100">
                            title
                          </Link>
                        </h2>
                        <div className="flex flex-wrap">Tags</div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">summary</div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <Link
                        href="/blog/slug"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={`Read "title"`}
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      </BaseLayout>
    </>
  )
}
