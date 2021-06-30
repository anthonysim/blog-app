import Link from 'next/link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";


export default function Navigation() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand><a className="logo" style={{ color: '#d23669' }}>Anthony Sim | DEV&nbsp;&nbsp;&nbsp;</a></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link href="/#">About&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link href="#">Posts&nbsp;&nbsp;&nbsp;&nbsp;</Link>
            <Link href="/#">Resume</Link>
          </Nav>

          {/* Email */}
          <a target="_blank" rel="noreferrer" href="mailto:anthonyysim@gmail.com">
            <AiOutlineMail style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;
          </a>

          {/* Github */}
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anthony-sim-28214850/"><FaLinkedin style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;
          </a>

          {/* Linkedin */}
          < a target="_blank" rel="noreferrer" href="https://github.com/anthonysim" >
            <FaGithub style={{ fontSize: '30px' }} />
          </a>
        </Container>
      </Navbar>
    </div >
  )
}