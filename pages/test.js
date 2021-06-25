import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function Test() {
  const string = `
  function() {
    console.log('hello world')
  }
  `
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {string}
    </SyntaxHighlighter>
  );
};

