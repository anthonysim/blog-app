// const titleStyleOptions = {
//   color: 'green',
// }


const paragraphStyleOptions = {
  color: 'green',
}


const MDXComponents = {
  // h1: (props) => {
  //   return <h1 className="text-center" style={titleStyleOptions} {...props} />
  // },
  p: (props) => {
    return <p className="text-center" style={paragraphStyleOptions} {...props} />
  },
}

export default MDXComponents;