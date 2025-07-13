import '../styles/styles.css';
import Head from "next/head";
import { Navbar } from '../components/Navbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simran Bagaria</title>
        <meta name="google-site-verification" content="mUBbj9d8ZcgU0CQZy_j0m1cHNEQIvunJZ8JeyxJBfCY" />
        <meta name="author" content="Simran Bagaria" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
