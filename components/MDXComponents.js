import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/cjs/styles/hljs/docco';

// stylings
const paragraphStyleOptions = {
  fontSize: '20px',
}


// components of mdx files
const MDXComponents = {
  h1: (props) => <h1 style={{ color: '#d23669' }} {...props} />,
  // p: (props) => {
  //   return <p style={paragraphStyleOptions} {...props} />
  // },

  code: ({ children }) => {
    return (
      <SyntaxHighlighter language="javascript" style={docco} customStyle={{ fontSize: '15px' }}>
        {children}
      </SyntaxHighlighter>
    )
  }
  // eslint-disable-next-line react/display-name
}

export default MDXComponents;