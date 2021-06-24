import { Provider } from 'next-auth/client'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '@/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === undefined) {
    return null;
  }
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp
