import React, { FunctionComponent } from 'react'
interface TabItem {
  name: string,
  url: string
}
const tabs: TabItem[] = [
  {
    name: '文章',
    url: './'
  }, {
    name: '站点',
    url: './sites'
  }
]
interface Props {
  search: string,
  onSearchChange: (string) => void,
  onClickSearch: () => void
}

const Tab: FunctionComponent<Props> = (props) => {
  return (
    <div className="tabs py-2 md:flex md:items-center md:justify-between md:pr-6">
      <ul className="tabs-list flex px-5" role="nav">
        {
          tabs.map(item => (
            <li key={item.name} className="tabs-item py-2 px-5 mr-2 rounded text-white font-bold text-xl hover:bg-gray-300 hover:bg-opacity-50 active:bg-gray-300 active:bg-opacity-50">
              <a href={item.url}>{item.name}</a>
            </li>
          ))
        }
      </ul>
      <section className="flex items-center">
        <input value={props.search} className="ml-5 mt-2 text-sm w-9/12 leading-8 pl-2 rounded-md font-sans" type="text" name="" id="" placeholder="搜索 如 js in:tag" onChange={props.onSearchChange}/>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="#fff" onClick={props.onClickSearch}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </section>
    </div>
  )
}

export default Tab