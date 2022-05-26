import '../styles/globals.css'
import '../components/Navigation/Navigation.css'
import '../components/Footer/Footer.css'
import '../components/Contact/Contact.css'
import '../components/Cards/Cards.css'
import '../components/Slide/Slide.css'
import '../components/BackTop/BackTop.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
