import React, { FunctionComponent } from 'react'
import { Item as ArticleItem } from '../../types/index'
interface ItemProps {
  data: ArticleItem
}
const Item:FunctionComponent<ItemProps> = (props) => {
  const { data } = props
  return (
    <div className="item text-left py-2 mb-3">
      <a href={data.link}><h5 className="item_title text-gray-900 hover:text-red-600 font-bold text-xl">{ data.name }</h5></a>
      {
        data.tags.length > 0 ? <div className="item_tags flex mt-2 text-sm">
          分类：
          <ul className="flex">
            {
              data.tags.map((tag, index) => {
                return <li key={index} className="mr-1">{tag}</li>
              })
            }
          </ul>
        </div> : null
      }
      {
        data.description ? <p className="text-gray-500 mt-2">{data.description}</p> : null
      }
      <div className="source mt-2 text-gray-500">来源：{ data.source }</div>
    </div>
  )
}
export default Item