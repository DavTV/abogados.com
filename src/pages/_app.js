import '@/styles/globals.css'
import { useState } from 'react';
import Layout from './layout'

export default function App({ Component, pageProps }) {
  const [scrollTop, setScrollTop] = useState(0);
  //  useState
    const handleScroll = event => {
      setScrollTop(event.currentTarget.scrollTop);
      console.log(scrollTop)
    };
    return  <Layout handleScroll={handleScroll}>
              <Component {...pageProps} />
            </Layout>
}
