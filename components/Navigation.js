import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export default function Navigation() {
  return (
    <div>
      <Container>
        <Navbar expand="md">

          {/* link to home on navbar */}
          <Link href="/" passHref>
            <Navbar.Brand className="logo" style={{ color: '#d23669' }}>Anthony Sim | DEV</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              {/* navabar links */}
              <Link href="/about" passHref>
                <Nav.Link href="#home">About</Nav.Link>
              </Link>
              <Link href="/resume" passHref>
                <Nav.Link href="#link">Resume</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div >
  )
}