import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';


export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
      <ScrollToTop />
      <br />
    </div>
  )
}