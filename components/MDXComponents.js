// const titleStyleOptions = {
//   color: 'green',
// }


const paragraphStyleOptions = {
  color: 'blue',
  fontSize: '50px'
}


const MDXComponents = {
  // h1: (props) => {
  //   return <h1 className="text-center" style={titleStyleOptions} {...props} />
  // },
  p: (props) => {
    return <p className="" style={paragraphStyleOptions} {...props} />
  },
}

export default MDXComponents;