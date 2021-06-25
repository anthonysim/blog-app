import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

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
    </div>
  )
}