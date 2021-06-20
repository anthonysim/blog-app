import Head from 'next/head';
import Navigation from '../components/Navigation';
import Card from '../components/Card';


export default function Latest() {
  return (
    <div>
      <Head>
        <title>ANTHONY SIM | Latest</title>
        <meta name="description" content="latest page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      Latest!
    </div>
  )
}