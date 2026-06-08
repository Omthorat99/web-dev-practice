const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('Hello World! This is a post request')
})
app.delete('/', (req, res) => {
  res.send('Hello World! This is a delete request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
