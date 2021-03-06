import Link from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import styles from '../styles/Navigation.module.css';

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
            <Nav className="me-auto">

              {/* navabar links */}
              <Link href="/about" passHref>
                <Nav.Link>About</Nav.Link>
              </Link>
              {/* <Link href="#" passHref>
                <Nav.Link>Categories</Nav.Link>
              </Link> */}

              <Nav.Link target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1v4x9BUasrUOIPkUAkIix-X4Rfl2xZb4U/view?usp=sharing" >Resume</Nav.Link>


              {/* <Link href="/contact" passHref>
                <Nav.Link>Contact</Nav.Link>
              </Link> */}
            </Nav>

            {/* github */}
            <Nav className="justify-content-right">
              <Nav.Link target="_blank" rel="noreferrer" href="https://github.com/anthonysim"><FaGithub className={styles.github} />
              </Nav.Link>

              {/* linkedin */}
              <Nav.Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony"><FaLinkedin className={styles.linkedin} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div >
  )
}

