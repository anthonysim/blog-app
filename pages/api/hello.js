// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const hello = (req, res) => {
  res.status(200).json({ message: 'hello how are u?' })
};

export default hello;