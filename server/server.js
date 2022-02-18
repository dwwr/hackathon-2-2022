const express = require('express')
const bodyParser = require('body-parser')
const fs = require("fs")
const app = express()
const port = 3000

const rawParser = bodyParser.raw()
app.use(rawParser)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', rawParser, (req, res) => {
  console.log('request received from 3ds')
  console.log(JSON.stringify(req.body))
  fs.writeFileSync("test.png", req.body.toString('base64'), () => {})
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
