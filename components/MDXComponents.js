import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

// stylings
const titleStyleOptions = {
  // textAlign: 'center',
  color: '#d23669',
}

const paragraphStyleOptions = {
  fontSize: '20px',
}

const syntaxStyleOptions = {
  fontSize: '15px',
}

// components of mdx files
const MDXComponents = {
  h1: (props) => {
    return <h1 style={titleStyleOptions} {...props} />
  },
  // p: (props) => {
  //   return <p style={paragraphStyleOptions} {...props} />
  // },

  code: ({ children }) => {
    return (
      <SyntaxHighlighter language="javascript" style={docco} customStyle={syntaxStyleOptions}>
        {children}
      </SyntaxHighlighter>
    )
  }
}

export default MDXComponents;