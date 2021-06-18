const MDXComponents = {
  p: (props) => <p style={{ fontSize: '50px' }} {...props} />,
  h1: (props) => <h1 style={{ color: 'blue' }} {...props} />
}

export default MDXComponents;