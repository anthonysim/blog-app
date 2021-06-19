import Link from 'next/link';


export default function Card() {
  const styleOptions = {
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
          <div className="card shadow">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>Life</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>React</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>NextJS</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-sm-6">
          <br />
          <div className="card shadow">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>Animation</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural fdsafdsfasdfdsfdsdfdsfdsfdsfdfdsfdsfdfdfdsfdsffdsafsdfsdfsdafsdfsdafsdafsdfdsfdsfsdfdsfsdfsdfsdfsdfsdfsf.</p>
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