const express = require('express')
const app = express()
const { products } = require('./data')


app
  .get("/", (req, res) => {
    res.send("<h1>Home Page</h1><a href='/api/products'>Products</a>")
  })
  .get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { name, id, image } = product
      return { name, id, image }
    })
    res.json(newProducts)
  })
  .get('/api/products/:id', (req, res) => {
    // console.log(req);
    // res.send()
    const { id } = req.params
    const singleProduct = products.find((product) => {
      return product.id === Number(id)
    })
    if (!singleProduct) {
      // res.status(404).send("product not found")
      res.json({ "results": [], "error": 'Product not found' })
    }
    res.json({ results: [singleProduct], message: "found" })
  })
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //query search for data  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  .get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query
    // ...creates a new nonmutable copy
    let sortedProducts = [...products]
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.includes(search)
      })
    }
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      return res.json({ results: [], message: 'product not found' })
    }
    res.json({ results: sortedProducts, message: "found" })
  })

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



  .all('*', (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
  })
  .listen(3000, () => { console.log('server listening at 3000...') })
