import React, { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";
import styles from '../styles/ScrollToTop.module.css';


export default function ScrollToTop() {
  const [isVisible, setVisable] = useState(false);

  useEffect(() => {
    setVisable(false);
    document.addEventListener("scroll", () => {
      toggleVisibility();
    });
  }, []);

  const toggleVisibility = () => {
    window.scrollY > 300 ? setVisable(true) : setVisable(false);
  }

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
      {isVisible && <a onClick={scrollToTop} className={styles.button}><FaChevronUp /></a>}
    </div>
  )
}