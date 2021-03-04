import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Head from 'next/head'
import PageHeader from '../components/page-header'
import Donators from '../components/donators'
function MyApp({ Component, pageProps }) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <Head>
      <title>文章收藏 - next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <PageHeader/>
    <Component {...pageProps} />
    <Donators/>
  </div>
}

export default MyApp
