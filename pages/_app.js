import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Head from 'next/head'
import { AppProps } from 'next/app'
import PageHeader from '../components/page-header'
function MyApp({ Component, pageProps } : AppProps) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <Head>
      <title>文章收藏 - next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader/>
    <Component {...pageProps} />
  </div>
}

export default MyApp
