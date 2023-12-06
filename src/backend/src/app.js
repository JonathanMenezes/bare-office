import express from 'express'
import router from './routes.js'
import cors from 'cors'
import cookieSession from 'cookie-session'
import bodyParser from 'body-parser'
import db from './app/database/db.js'

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())

app.use(cookieSession({
    name: 'session',
    keys: ['Jonathan'],
    maxAge: 24 * 60 * 60 * 100
}))

app.post('/register', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)'

    const values = [username, email, password]

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
            console.log('Usuário cadastrado com sucesso!')
        }
    })
})

app.get('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const sql = 'SELECT * FROM users WHERE username = ? && password = ?'

    const values = [username, password]

    db.query(sql, values, (err, result) => {
        if (err) {
            res.send({ error: err })
        } if (result.length > 0) {
            res.send(result)
            console.log('Login efetuado com sucesso!')
        } else {
            res.send({ message: "Usuário inválido!" })
        }
    })
})

app.use(router)

export default app