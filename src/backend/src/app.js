import express from 'express'
import router from './routes.js'
import cors from 'cors'
import cookieSession from 'cookie-session'
import passport from 'passport'
import authRoute from './routes/auth.js'
import './passport.js'

const app = express()

app.use(express.json())

app.use(cookieSession({
    name: 'session',
    keys: ['Jonathan'],
    maxAge: 24 * 60 * 60 * 100
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}))

app.use(router)
app.use("/auth", authRoute)

export default app