import bodyParser from 'body-parser'
import configViewEngine from './config/viewEngine'
import express from 'express'
import initWebRoutes from './route/web'

require('dotenv').config()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

configViewEngine(app)
initWebRoutes(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('NodeJS listening on http://localhost:' + port)
})
