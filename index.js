import 'dotenv/config'
import express from 'express'
import './database/connect.js'
import auth from './routes/auth.route.js'

const app = express()

app.use(express.json())
app.use('/api/v1/auth', auth)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT)
})
