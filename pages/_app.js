import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import MDXComponents from '../components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp;
