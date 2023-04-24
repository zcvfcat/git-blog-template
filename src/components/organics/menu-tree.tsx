import { Tree, TreeProps } from 'components/moleculars/tree'

export const MenuTree = ({ menu }: TreeProps) => {
  return (
    <div className="w-full flex-col flex max-w-xs">
      <Tree key="tree" menu={menu} />
    </div>
  )
}
