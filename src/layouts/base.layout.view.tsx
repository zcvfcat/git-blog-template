import { BaseAside } from 'layouts/aside/base.aside.view'
import { BaseFooter } from 'layouts/footer/base.footer.view'
import { BaseHeader } from 'layouts/header/base.header.view'
import { BaseNav } from 'layouts/nav/base.nav.view'

interface BaseLayoutViewProps {
  children: React.ReactNode
}

export const BaseLayoutView = ({ children }: BaseLayoutViewProps) => {
  return (
    <>
      <BaseHeader />
      <main className="flex h-screen flex-row justify-between mb-auto">
        <BaseNav />
        <nav>nav</nav>
        <section className="mx-auto min-w-[48rem] px-4 sm:px-6 xl:min-w-[64rem] xl:px-0">{children}</section>
        <BaseAside />
      </main>
      <BaseFooter />
    </>
  )
}
