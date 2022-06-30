import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

import '../styles/globals.css'
import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa"


function MyApp({ Component, pageProps }) {

  const [scrollTop, setScrollTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setScrollTop(false);
        } else {
            setScrollTop(true);
        }
    }, { passive: true })

  }, [])
  

  return (
      <Provider store={store}>
        <Layout>
            <button hidden={scrollTop} onClick={() => window.scrollTo(0, 0)} id="myBtn" className="w-10 fixed bottom-10 right-10 z-50 p-3 bg-green-600 text-center text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg" title="Go to top"><FaArrowUp/></button>
            <Component {...pageProps} />
        </Layout>
      </Provider>

  )
}

export default MyApp
