import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Link href="/">
            <Navbar.Brand><a style={{ color: '#d23669' }}>Anthony Sim | DEV&nbsp;&nbsp;&nbsp;</a></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link href="/latest">
              <a>Latest&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </Link>
            <Link href="/posts">
              <a>Posts&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </Nav>
        </Container>
      </Navbar>

    </div>

  )
}