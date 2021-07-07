import { FaChevronUp } from "react-icons/fa";
import styles from '../styles/ScrollToTop.module.css';


export default function ScrollToTop() {
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={styles.scrollUpButton}>
      <a onClick={scrollToTop} className={styles.button}><FaChevronUp /></a>
    </div>
  )
}