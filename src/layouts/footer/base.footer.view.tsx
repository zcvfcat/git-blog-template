import Link from 'next/link'

export const BaseFooter = () => (
  <footer>
    <div className="mt-16 flex flex-col items-center">
      <div className="mb-3 flex space-x-4">소셜미디어</div>
      <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>지은이</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">어디론가?</Link>
      </div>
    </div>
  </footer>
)
