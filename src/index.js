const express = require('express')
const app = express()
app.use(express.static('image'))
app.listen(4000)
