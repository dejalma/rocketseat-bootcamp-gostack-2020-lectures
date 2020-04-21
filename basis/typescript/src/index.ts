import express from 'express'
import helloWord from './route'

const app = express()

app.get('/', helloWord)

app.listen(3333)