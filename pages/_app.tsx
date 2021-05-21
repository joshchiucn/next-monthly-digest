import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import { AppProps } from 'next/app'
import Head from 'next/head'
function MyApp({ Component, pageProps }:AppProps) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <Head>
      <title>文章收藏 - next</title>
      <link rel="icon" href="./favicon.ico"/>
    </Head>
    <Component {...pageProps} />
  </div>
}

export default MyApp
