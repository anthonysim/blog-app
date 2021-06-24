const titleStyleOptions = {
  // textAlign: 'center',
  color: '#d23669',
}

const paragraphStyleOptions = {
  fontSize: '20px',
}

const MDXComponents = {
  h1: (props) => {
    return <h1 style={titleStyleOptions} {...props} />
  },
  // p: (props) => {
  //   return <p style={paragraphStyleOptions} {...props} />
  // },
}

export default MDXComponents;