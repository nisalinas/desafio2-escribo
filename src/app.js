import bodyParser from 'body-parser'
import express from 'express'
import { authenticate } from './controllers/users/authenticate.js'
import { profile } from './controllers/users/profile.js'
import { register } from './controllers/users/register.js'

export const app = express()
app.use(bodyParser.json())

// Routes
app.use('/signup', register)
app.use('/signin', authenticate)
app.use('/user', profile)
