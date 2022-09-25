const express = require('express')

const app = express()

app.use('/image', express.static('images'))

app.listen(4000, () => {
  console.log(`Example app listening on port 4000`)
})
