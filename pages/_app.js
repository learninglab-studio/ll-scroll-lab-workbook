import '../styles/globals.css'
// import Transition from '../src/components/transitions/framer-page-transitions/ScaleDownAndSwipe'
import Transition from '../src/components/transitions/framer-page-transitions/SimpleTransition'


function MyApp({ Component, pageProps }) {
  return (
    <Transition>
      <Component {...pageProps} />
    </Transition>
  )
}

export default MyApp
