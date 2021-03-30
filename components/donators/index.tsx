import React, { FunctionComponent } from 'react'
import styles from './style.module.scss'
import useSWR from 'swr'
const fetcher = (url) => fetch(url).then((res) => res.json())
const Donators: FunctionComponent = () => {
  const { data, error } = useSWR('/api/donators', fetcher);
  if (error) {
    return null
  } else if (data) {
    return <div className={styles.donators + ' text-left bg-gray-100 rounded-sm py-3 px-8 md:py-6 md:px-16'}>
      <h4 className="text-xl font-medium text-gray-800">财政贡献者排行</h4>
      <h5 className="text-gray-500 mt-4">组织</h5>
      <ol className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-y-2">
        {
          data.map((item, index) => (
            <li key={index} className="item flex">
              <div className="item_name flex flex-shrink-0 items-center h-8 justify-between pl-4 pr-1 bg-white rounded-3xl">
                <div className="text-xs text-gray-400">{index + 1}</div>
                <img src={item.icon} alt={item.name} className="w-7 ml-3"/>
              </div>
              <div className="ml-2">
                <h6 className="text-base font-medium">{item.name}</h6>
                <div className="text-xs text-gray-500">{moneyFormat(item.amount)}</div>
              </div>
            </li>
          ))
        }
      </ol>
    </div>
  } else {
    return null
  }
}
function moneyFormat (money: number) {
  if (money >= 10**3) {
    return `$${Math.floor(money / 1000)}k USD`
  } else {
    return `$${money} USD`
  }
}
export default Donators