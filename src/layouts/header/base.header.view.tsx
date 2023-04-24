import Link from 'next/link'

export const BaseHeader = () => (
  <div /** @desc Header-container */ className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    <header /** @desc header */ className="flex items-center justify-between py-10">
      <Link /** @desc LOGO */ href="/" aria-label="암튼 헤더">
        <div className="flex items-center justify-between">
          <div className="mr-3">암튼 로그 넣기</div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">헤더 타이틀</div>
        </div>
      </Link>
      <div /** @desc 정보 */ className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          <Link key="blog" href="/blog" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
            blog
          </Link>
          <Link key="tags" href="/tags" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
            tags
          </Link>
          <Link key="projects" href="/projects" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
            projects
          </Link>
          <Link key="about" href="/about" className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
            about
          </Link>
        </div>
        {/* <ThemeSwitch /> */}
        {/* <MobileNav /> */}
      </div>
    </header>
  </div>
)
