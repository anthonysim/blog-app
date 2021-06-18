import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MDXComponents from '../components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';


function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}

export default MyApp;
