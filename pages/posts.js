import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Posts() {
  return (
    <div>
      <Head>
        <title>ANTHONY SIM | Posts</title>
        <meta name="description" content="list of posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      Posts!
    </div>
  )
}