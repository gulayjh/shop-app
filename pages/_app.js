import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import Router, { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Shop</title>
      </Head>

            <Header />
            <Component {...pageProps} />
            <Footer />
         
    </>
  )
}


export default MyApp

