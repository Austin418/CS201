const uploadProductImage = (req, res) => {
  // console.log(req.files);
  const productImage = req.files.image
  res.send('uplaodProductImage')
}

module.exports = {
  uploadProductImage,
}