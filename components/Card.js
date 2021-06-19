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
      <br />
      <h1>Categories</h1>
      <div className="row" >

        <div className="col-sm-6">
          <br />
          <Link href="/posts" >
            <a className="btn">
              <div className="card shadow">
                <div className="card-body" style={bodyStyleOptions}>
                  <h5 className="card-title" style={titlebodyStyleOptions}>Life</h5>
                  <p className="card-text" style={bodyStyleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsf
                    dsfdfdsfdsfdfdfdsfdsffdsafsdfsddfdssfdsfdfdffd
                    fsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfdsafdsfsdffsf.</p>
                  <strong className="bg-white">Read more -></strong>
                </div>
              </div>
            </a>
          </Link>
        </div>


        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={bodyStyleOptions}>
              <h5 className="card-title" style={{ backgroundColor: 'white', color: '#d23669' }}>React</h5>
              <p className="card-text" style={bodyStyleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={bodyStyleOptions}>
              <h5 className="card-title" style={bodyStyleOptions}>NextJS</h5>
              <p className="card-text" style={bodyStyleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={bodyStyleOptions}>
              <h5 className="card-title" style={bodyStyleOptions}>Animation</h5>
              <p className="card-text" style={bodyStyleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}