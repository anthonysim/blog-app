import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js';


export default function Layout({ children }) {
  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);

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
    </div>
  )
}