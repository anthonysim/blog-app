import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Anthony Sim</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
            <li className="nav-item">

              <a className="nav-link text-dark" aria-current="page" href="#">Latest</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Posts</a>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link text-dark" >Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}