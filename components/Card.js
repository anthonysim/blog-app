import Link from 'next/link';

export default function Card() {
  const styleOptions = {
    backgroundColor: 'white',
    borderRadius: '30%'
  }

  return (
    <div >
      <br />
      <br />
      <h1 >Latest Posts</h1>
      <div className="row" >
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>Special title treatment</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural lead-in to additional contentfasfdsfdsfdsffdfdsfdsf.</p>
              <Link href="/posts" >
                <a className="btn btn-primary">Read more</a>
              </Link>
            </div>
          </div>
        </div>


        <div className="col-sm-6">
          <div className="card">
            <div className="card-body" style={styleOptions}>
              <h5 className="card-title" style={styleOptions}>Special title treatment</h5>
              <p className="card-text" style={styleOptions}>With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}