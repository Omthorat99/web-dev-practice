const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! , i am om ')
})

// Use this command to run the server in watch mode
// node --watch .\index.js
app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:${port}`)
})
