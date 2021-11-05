const express = require('express')
const app = express()
const {menu} = require('./data')

app
  .get('/', (req, res) => {
    res.send(menu.category)

  })
  .get('/menu', (req, res) => {
    const newMenu = menu.map((item) => {
      return item.title
      
    })
    const allCategories = [...new Set(menu.map((item) => {
      return item.category
    }))]
    // return { allCategories: category,cats,  title, price }

    res.json({results:{categories: allCategories, names : newMenu}, log: "success"})
  })
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  .get('/menu/query/:id', (req, res) => {
    // console.log(req);
    // res.send()
    const { id } = req.params
    const singleItem = menu.find((item) => {
      return item.id === Number(id)
    })
    if (!singleItem) {
      // res.status(404).send("product not found")
      res.json({ "results": [], "error": 'item not found' })
    }
    res.json({ results: [singleItem], message: "found" })
  })
  .get('/menu/query', (req, res) => {
    console.log(req.query);
    const { search, price } = req.query
    // ...creates a new nonmutable copy
    let sortedMenu = [...menu]

    if (search) {
      sortedMenu = sortedMenu.filter((item) => {
        return item.category.includes(search)
      })
    }
    if (price === 'asc') {
      sortedMenu = sortedMenu.sort((a, b) => {
        return a.price - b.price
      })
    }
    if (price === 'dec') {
      sortedMenu = sortedMenu.sort((a, b) => {
        return b.price - a.price
      })
    }
    if (sortedMenu.length < 1) {
      return res.json({ results: [], message: 'product not found' })
    }
    res.json({ results: sortedMenu, message: "found" })
  })
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  .all('*', (req, res) => {
    res.status(404).send("<h1>Page not found</h1>")
  })
  .listen(3000, () => {
    console.log(`listening on 3000...`)
  })