import Head from 'next/head';

export default function BlogMeta({ meta }) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}