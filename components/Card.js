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
      {/* Greeting */}
      <h1 className="titles text-center">Weclome...</h1>
      <h5 className="message text-center text-muted"><strong>Get Started </strong>by selecting a category.</h5>
      <br />
      <div className="row" >

        {/* REACT */}
        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>REACT</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    React is a declarative, efficient, and flexible JavaScript library for
                    building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>

        {/* NEXTJS */}
        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>NEXTJS</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    Production grade React applications that scale. Companies use Next.js to build static and dynamic websites and web applications.
                    <br />
                    <br />
                  </p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>

        {/* AWS */}
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

        {/* Misc. */}
        <div className="col-lg-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>Animation</h5>
                  <p className="card-text" style={bodyStyleOptions}>
                    The GreenSock Animation Platform (GSAP) is a popular set of JavaScript tools for building animations on the web. Anything you see in your web browser can be animated with GSAP.
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