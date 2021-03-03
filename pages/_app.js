import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import PageHeader from '../components/page-header'
import Donators from '../components/donators'
function MyApp({ Component, pageProps }) {
  return <div className="App max-w-3xl mx-auto pb-6">
    <PageHeader/>
    <Component {...pageProps} />
    <Donators/>
  </div>
}

export default MyApp
