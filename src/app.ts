import express from 'express'
import db from './config/dbConnect'
import { router } from './routes/index'

db.on('error', console.log.bind(console, 'Connection Error'))
db.once('open', () => {
  console.log('conection to mongodb success')
})

const app = express()
app.use(express.json())
app.use(router)

export { app }
