import React, { FunctionComponent } from 'react'
import { SiteItem } from '../types/index'

const Sites: FunctionComponent<{ data: SiteItem[] }> = ({ data }) => {
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
}

export async function getServerSideProps(): Promise<{ props: { data: SiteItem[] } }> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/sites`).then(res => res.json())
  return {
    props: {
      data
    }
  }
}

export default Sites