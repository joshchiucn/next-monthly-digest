import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Head from 'next/head'
import PageHeader from '../components/page-header'
import Donators from '../components/donators'
const faviconPath = process.env.NODE_ENV === 'development' ? '/favicon.ico' : '/next-monthly-digest/favicon.ico'
function MyApp({ Component, pageProps }) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <Head>
      <title>文章收藏 - next</title>
      <link rel="icon" href={faviconPath} />
    </Head>
    <PageHeader/>
    <Component {...pageProps} />
    <Donators/>
  </div>
}

export default MyApp
