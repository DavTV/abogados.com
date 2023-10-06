import '@/styles/globals.css'
import { useState } from 'react';
import Layout from './layout'
import 'bootswatch/dist/lux/bootstrap.css';
// import { SessionProvider } from "next-auth/react"

export default function App({Component, pageProps}) {
  // Component, pageProps: { session, ...pageProps }
  const [scrollTop, setScrollTop] = useState(0);
  //  useState
    const handleScroll = event => {
      setScrollTop(event.currentTarget.scrollTop);
      console.log(scrollTop)
    };
    return(  
      

        <Layout handleScroll={handleScroll}>
          <Component {...pageProps} />
        </Layout>

    )}
