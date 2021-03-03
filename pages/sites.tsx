import React, { FunctionComponent } from 'react'
import { sites } from '../data'
const Sites: FunctionComponent = () => (
  <div className="sites text-left">
    <ul>
      {
        sites.map((site, index) => (
          <li key={index} className="p-4">
            <a href={site.link} className="text-gray-900 hover:text-red-600 font-bold text-xl">{site.name}</a>
            <p className="mt-2 text-gray-500 text-sm">{site.description}</p>
          </li>
        ))
      }
    </ul>
  </div>
)
export default Sites