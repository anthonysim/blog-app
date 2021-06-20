import Navigation from './Navigation';
import Footer from './Footer';

import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}