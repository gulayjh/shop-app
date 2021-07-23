import Head from "next/head";
import "../styles/globals.css";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
// import SideDrawer from "../components/Header/SideDrawer/SideDrawer";
import { useState } from "react";
import {ContextProvider} from '../store/context';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
    const [sideDrawer, setSideDrawer] = useState(false);

    return (
        <ContextProvider>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <title>Shop</title>
            </Head>

            <Header setSideDrawer={setSideDrawer} />
            {sideDrawer ? <SideDrawer /> : null}
            <Component {...pageProps} />

            {/* <Footer /> */}
        </ContextProvider>
    );
}

export default appWithTranslation(MyApp);
