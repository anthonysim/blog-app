import Head from 'next/head';
import { Card, Button } from 'react-bootstrap';

export default function About() {
  return (
    <div>
      <Head>
        <title>ANTHONY SIM | About</title>
        <meta name="description" content="about me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1 style={{ color: '#d23669', marginLeft: '200px' }}>Hi There, </h1>
      <br />
      <p style={{ marginLeft: '200px' }}>My name is Anthony and I am a full-stack software engineer from Southern California.     I have a background in accounting, auditing, and finance.
        <br />
        <br />
        I enjoy traveling, eating at new restaurants, Brazilian Jiu-Jitsu, learning new things and seeing things in different perspectives.
      </p> */}
      <br />
      <Card>
        {/* <Card.Header style={{ color: '#d23669' }} className="display-6">Hello There,</Card.Header> */}
        <Card.Body>
          <Card.Title style={{ fontSize: '35px', color: '#d23669' }} >Hello,</Card.Title>
          <Card.Text>
            <br />
            My name is Anthony and I am a <span style={{ color: '#d23669' }} >full-stack software engineer</span> from Southern California. I have a background in accounting, auditing, and finance.
            <br />
            <br />
            Things I enjoy...
            <ul>
              <li>Traveling</li>
              <li>Steak & BBQ</li>
              <li>Brazilian Jiu-Jitsu</li>
              <li>Learning New Tech</li>
              <li>Brazilian Jiu-Jitsu</li>
              <li>Biographies</li>
            </ul>
            <br />
            I started this site with the hopes to continually learn both professionally and personally.
            <br />
            <br />
            Thank you for visiting my site.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}