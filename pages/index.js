import Head from 'next/head';
import Image from 'next/image';
import FrontCard from '../components/FrontCard';


export default function Home() {
  return (
    <div>
      <Head>
        <title>ANTHONY SIM | Life & Code</title>
        <meta name="description" content="welcome page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FrontCard />
    </div>
  )
}
