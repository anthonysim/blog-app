import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Navigation() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Link href="/">
            <Navbar.Brand><a className="logo" style={{ color: '#d23669' }}>Anthony Sim | DEV&nbsp;&nbsp;&nbsp;</a></Navbar.Brand>
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

          {/* Email */}
          <a target="_blank" href="#"><AiOutlineMail style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;</a>

          {/* Github */}
          <a target="_blank" href="https://www.linkedin.com/in/anthony-sim-28214850/"><FaLinkedin style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;</a>

          {/* Linkedin */}
          < a target="_blank" href="https://github.com/anthonysim" > <FaGithub style={{ fontSize: '30px' }} /></a>


        </Container>
      </Navbar>

    </div>

  )
}