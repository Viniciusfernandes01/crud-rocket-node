import "reflect-metadata"
import express, { json } from 'express'
import './database'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log('Server is running at port 3000'))