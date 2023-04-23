interface BaseLayoutViewProps {
  children: React.ReactNode
}

export const BaseLayoutView = ({ children }: BaseLayoutViewProps) => {
  return (
    <>
      <header>header</header>
      <main>
        <nav>nav</nav>
        <section>{children}</section>
        <aside>aside</aside>
      </main>
    </>
  )
}
