import { BaseLayoutView } from 'layouts/base.layout.view'

interface BaseLayoutProps {
  children: React.ReactNode
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <BaseLayoutView>{children}</BaseLayoutView>
}
