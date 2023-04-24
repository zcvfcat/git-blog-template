export default interface File {
  path: string
  name: string
  createdAt?: string
  children?: File[]
  extension?: string
}

export interface TreeProps {
  menu: File
}

export const Tree = ({ menu }: TreeProps) => (
  <ul className="menu bg-default text-content-700 ml-2 mb-0 mt-0 p-2 pt-0 pb-0">
    {menu.children &&
      menu.children.map((item) => {
        if (item.children) {
          return <Directory key={item.path} item={item} />
        }
        return (
          <Item key={item.path}>
            <span className="-ml-px block border-l border-transparent pl-4 text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-300">
              <Link href="/">{item.name.replace(item.extension, '')}</Link>
            </span>
          </Item>
        )
      })}
  </ul>
)
