import Head from 'next/head';
import Link from 'next/link';
import { FaCoffee } from "react-icons/fa";
import fs from 'fs';
import path from 'path';


export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), "pages/posts/react");
  const postFilenames = fs.readdirSync(postDirectory).filter(file => file.includes('mdx'));
  const postModules = await Promise.all(
    postFilenames.map(async (file) => import(`./${file}`))
  );
  const postMetadata = postModules.map(({ meta }) => meta);
  console.log(postMetadata)

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
        <title>All React Posts</title>
        <meta name="description" content="all react posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      <div style={{ marginLeft: '200px' }}>
        <Link href="/posts/react/googleSignIn" passHref>
          <a><h4 style={{ color: '#d23669' }}><strong>{data.title}</strong></h4></a>
        </Link>

        <span>{data.publishDate}&nbsp;&nbsp;|</span>&nbsp;&nbsp;
        <span>{data.time}</span>
        <p>{data.description}</p>
      </div>
    </div >
  )
}



