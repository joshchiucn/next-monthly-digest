import React, { FunctionComponent } from 'react'
import useSWR from 'swr'
const fetcher = url => fetch(url).then(res => res.json())
const Sites: FunctionComponent = () => {
  const { data, error } = useSWR('/api/sites', fetcher)
  if (error) {
    return <div>something went wrong</div>
  } else if (data) {
    return <div className="sites text-left">
      <ul>
        {
          data.map((site, index) => (
            <li key={index} className="p-4">
              <a href={site.link} className="text-gray-900 hover:text-red-600 font-bold text-xl">{site.name}</a>
              <p className="mt-2 text-gray-500 text-sm">{site.description}</p>
            </li>
          ))
        }
      </ul>
    </div>
  } else {
    return null
  }
}
export default Sites