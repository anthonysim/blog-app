import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";
import styles from '../styles/ScrollToTop.module.css';


export default function ScrollToTop() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      window.scrollY > 300 ? setVisible(true) : setVisible(false);
    });
  }, []);

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.scrollUpButton}>
      {isVisible && <div><a onClick={scrollToTop} className={styles.button}><FaChevronUp /></a></div>}
    </div>
  )
}