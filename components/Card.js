import Link from 'next/link';

export default function Card() {
  const titlebodyStyleOptions = {
    color: '#d23669',
    backgroundColor: 'white',
    fontWeight: 'bold',
  }

  const bodyStyleOptions = {
    backgroundColor: 'white',
  }

  return (
    <div >
      <br />
      <h1 className="titles text-center">Weclome...</h1>
      <h5 className="message text-center text-muted">Get Started by selecting a category.</h5>
      <br />
      <div className="row" >

        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>LIFE</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    A collection of thoughts, feelings, and reflections that cover
                    everything from life career, and everything in between.
                    <br />
                    <br />
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>

        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>REACT</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>


        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>NEXTJS</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    Production grade React applications that scale. The world's leading companies use Next.js by Vercel to build static and dynamic websites and web applications.
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>



        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>AWS</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.
                    <br />
                    <br />
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>

      </div>
    </div>
  )
}