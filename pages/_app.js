import Navbar from '../components/Navbar'
import { AuthContextProvider } from '../stores/authContext'
import '../styles/globals.css'
import Image from 'next/image'


function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp
