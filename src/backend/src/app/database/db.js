import { createConnection } from 'mysql'

const db = new createConnection({
    host: "127.0.0.1",
    port: '3306',
    user: "root",
    password: "root",
    database: "bare_office"
})

db.connect()


export const consulta = (sql, values = '') => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) {
                return reject(err)
            } else {
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
            }
        })
    })
}

export default db
