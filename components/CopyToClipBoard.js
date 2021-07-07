import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegClipboard } from "react-icons/fa";
import styles from '../styles/CopyToClipboard.module.css';

export default function CopyCodeBlock({ copiedCode }) {
  const copyBtnStyle = {
    backgroundColor: '#f8f8ff',
    borderColor: 'transparent',
    color: 'grey',
    width: '100%',
  }

  return (
    <div className={styles.grid}>
      <div style={{ backgroundColor: '#f8f8ff' }}></div>
      <CopyToClipboard text={copiedCode}>
        <button className="btn" style={copyBtnStyle}>Copy <FaRegClipboard style={{ verticalAlign: 'text-top' }} /></button>
      </CopyToClipboard>
    </div>
  )
}