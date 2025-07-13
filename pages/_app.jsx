import '../styles/styles.css';
import Head from "next/head";
import { Navbar } from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simran Bagaria</title>
        <meta name="author" content="Simran Bagaria" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
