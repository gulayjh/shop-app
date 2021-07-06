import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer/footer'
import Header from '../components/Header/header'
import Router, { useRouter } from 'next/router'
import SideDrawer from '../components/Header/SideDrawer/SideDrawer'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter()
  const [sideDrawer, setSideDrawer] = useState(false)

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Shop</title>
      </Head>

      <Header
        setSideDrawer={setSideDrawer}
      />
      {
        sideDrawer ?
          <SideDrawer />
          : null
      }
      <Component {...pageProps} />
      <Footer />

    </>
  )
}


export default MyApp

