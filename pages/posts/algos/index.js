import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';


export async function getStaticProps() {
  const postDirectory = path.join(process.cwd(), 'pages/posts/algos');
  const postFilenames = fs.readdirSync(postDirectory).filter(file => file.includes('mdx'));
  const postModules = await Promise.all(postFilenames.map(async (file) => import(`./${file}`)));
  const postMetadata = postModules.map(({ meta }) => meta);

  return {
    props: {
      data: postMetadata,
    }
  }
}

export default function AllAlgos({ data }) {
  console.log(data)
  return (
    <div >
      <Head>
        <title>All React Posts</title>
        <meta name="description" content="all algos posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <br />
      {/* listing of all react posts */}
      {data.sort((a, b) => b.id - a.id)
        .map(post => {
          return <div key={post.id} style={{ marginLeft: '200px' }}>
            <Link href={`/posts/algos/${post.slug}`} passHref>
              <a><h4 style={{ color: '#d23669' }}><strong>{post.title}</strong></h4>
                <span>{post.publishDate}&nbsp;&nbsp;|</span>&nbsp;&nbsp;
                <span>{post.time}</span>
                <p>{post.description}</p>
              </a>
            </Link>
          </div>
        })}
    </div >
  )
}




