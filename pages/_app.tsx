import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layoult from '../components/layoult/Layoult';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layoult>
      <Component {...pageProps} />
    </Layoult>
  );
}

export default MyApp;
