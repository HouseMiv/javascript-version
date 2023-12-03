const path = require('path')
const express = require('express')


const app = express()

app.use('', express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
  return response.sendFile('welcome', { root: '.' })
})

app.get('/dashboard', (request, response) => {
  return response.sendFile('dashboard', { root: '.' })
})

const port = '5173'

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
