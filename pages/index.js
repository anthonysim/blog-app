import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import Card from '../components/Card';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ANTHONY SIM | Life & Code</title>
        <meta name="description" content="welcome page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Card />
    </div>
  )
}
