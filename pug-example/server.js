'use strict'
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.set('PORT', PORT)
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('index')
})

app.listen(PORT, () =>
  console.log(`Now listening on port ${PORT}`)
)
