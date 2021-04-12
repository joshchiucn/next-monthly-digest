import React, { FunctionComponent } from 'react'
import { Item as ArticleItem } from '../../types/index'
interface ItemProps {
  data: ArticleItem
}
const Item:FunctionComponent<ItemProps> = (props) => {
  const { data } = props
  return (
    <div className="item text-left p-4">
      <a href={data.link}><h3 className="item_title text-gray-900 hover:text-red-600 font-bold text-xl">{ data.name }</h3></a>
      {
        data.description ? <p className=" mt-2">{data.description}</p> : null
      }
      {
        data.tags ? <div className="item_tags text-gray-500 flex mt-2 text-sm">
          分类：{data.tags}
        </div> : null
      }
      <div className="source mt-2 text-gray-500 text-sm">来源：{ data.source }</div>
    </div>
  )
}
export default Item