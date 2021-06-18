import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Anthony Sim</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
            <li className="nav-item">
              <Link href="/latest">
                <a className="nav-link text-dark" aria-current="page" href="#">Latest</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/posts">
                <a className="nav-link text-dark">Posts</a>
              </Link>
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