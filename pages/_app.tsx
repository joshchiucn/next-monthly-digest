import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <Component {...pageProps} />
  </div>
}

export default MyApp
