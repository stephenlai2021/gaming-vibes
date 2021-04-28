export default (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({ message: 'hello, world !' })
}