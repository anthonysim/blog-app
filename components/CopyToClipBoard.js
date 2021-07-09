import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegClipboard } from "react-icons/fa";
import styles from '../styles/CopyToClipboard.module.css';

export default function CopyCodeBlock({ copiedCode }) {
  const [isCopied, setCopied] = useState(false);

  const copiedHandler = (e) => {
    e.preventDefault();
    console.log('clicked')
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1750);
  }

  const copyBtnStyles = {
    backgroundColor: '#f8f8ff',
    borderColor: 'transparent',
    width: '100%',
  }

  return (
    <div className="copy">
      <div className={styles.grid}>
        <div style={{ backgroundColor: '#f8f8ff' }}></div>
        <CopyToClipboard text={copiedCode}>
          <button onClick={copiedHandler} className="btn" style={copyBtnStyles}>
            {!isCopied
              ? <span>Copy <FaRegClipboard style={{ verticalAlign: 'text-top' }} /></span>
              : <span style={{ color: 'blue' }}>Copied! </span>}
          </button>
        </CopyToClipboard>
      </div >
    </div>
  )
}