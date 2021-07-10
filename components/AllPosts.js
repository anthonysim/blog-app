import Head from 'next/head';
import Link from 'next/link';


export default function AllPosts({ children }) {
  const title = `All ${children[0].tag[0].charAt(0).toUpperCase() + children[0].tag[0].slice(1)} Posts`;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ marginLeft: '200px', color: '#d23669' }}>{children[0].tag[0].toUpperCase()}</h1>
      <br />
      <br />
      {children.sort((a, b) => b.id - a.id)
        .map(post => {
          return <div key={post.id} style={{ marginLeft: '200px' }}>
            <Link href={`/posts/${children[0].tag[0]}/${post.slug}`} passHref>
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