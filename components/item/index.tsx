import React, { FunctionComponent } from 'react'
import { Item as ArticleItem } from '../../types/index'
interface ItemProps {
  data: ArticleItem,
  onClickTag: any
}
const Item:FunctionComponent<ItemProps> = (props) => {
  const { data } = props
  return (
    <div className="text-left p-4">
      <a href={data.link}><h3 className="text-gray-900 hover:text-red-600 font-bold text-xl">{ data.name }</h3></a>
      {
        data.description ? <p className="mt-2">{data.description}</p> : null
      }
      {
        data.tags ? <ul className="text-gray-500 flex mt-2 text-sm">
          分类：{
            data.tags.split(/\s+/).map((tag, index) => <li key={index} className="text-blue-500" onClick={() => {props.onClickTag(tag)}}>{tag}</li>)
          }
        </ul> : null
      }
      <div className="mt-2 text-gray-500 text-sm">来源：{ data.source }</div>
    </div>
  )
}
export default Item