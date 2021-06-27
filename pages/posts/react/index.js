import Head from 'next/head';
import fs from 'fs';
import path from 'path';


export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "pages/posts/react");
  const postFilenames = fs.readdirSync(postDirectory).filter(file => file.includes('mdx'));
  const postModules = await Promise.all(
    postFilenames.map(async (file) => import(`./${file}`))
  );
  const postMetadata = postModules.map(({ meta }) => meta);
  console.log(postMetadata[0])

  return {
    props: {
      data: postMetadata[0],
    }
  }
}

export default function AllReactPage({ data }) {
  return (
    <div >
      <Head>
        <title>ANTHONY SIM | React Posts</title>
        <meta name="description" content="all react posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>{data.id}</p>
      <p>{data.title}</p>
      <p>{data.publishDate}</p>
      <p>{data.author}</p>
      <p>{data.tag}</p>
    </div>
  )
}




