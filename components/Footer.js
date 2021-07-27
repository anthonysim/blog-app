import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div>
      <div className={styles.pageContainer}>
        <footer className={styles.footer}><span >© 2021 | Forgetful SE</span> </footer>

        {/* Email */}
        {/* <a target="_blank" rel="noreferrer" href="mailto:anthonyysim@gmail.com">
          <AiOutlineMail style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;
        </a> */}

        {/* Github */}
        {/* < a target="_blank" rel="noreferrer" href="https://github.com/anthonysim" >
          <FaGithub style={{ fontSize: '30px' }} />
        </a> */}
        {/* &nbsp;&nbsp; */}
        {/* Linkedin */}
        {/* <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sim-anthony"><FaLinkedin style={{ fontSize: '30px' }} />&nbsp;&nbsp;&nbsp;
        </a> */}
      </div>
    </div >
  )
}