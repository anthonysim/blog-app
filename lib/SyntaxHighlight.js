import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';


export default function SyntaxHighlight({ str }) {

  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {str}
    </SyntaxHighlighter>
  );
};

