import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegClipboard } from "react-icons/fa";
import '../styles/CopyToClipboard.module.css';

export default function CopyCodeBlock({ children }) {
  const copyBtnStyle = {
    backgroundColor: '#f8f8ff',
    borderColor: 'transparent',
    color: 'grey',
    width: '100%',
    textAlign: 'right',
  }

  return (
    <div className="grid">
      <div>1</div>
      <div>2</div>
      {/* <button className="btn" style={copyBtnStyle}><FaRegClipboard style={{ verticalAlign: 'text-top' }} /></button> */}
    </div>
  )
}