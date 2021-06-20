import MDXComponents from '../components/MDXComponents';
import { MDXProvider } from '@mdx-js/react';
import Layout from '../components/Layout';

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <div className="container">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </MDXProvider>
  )
}

export default MyApp;
