import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

import { PostgresHelper } from './src/db/postgres/Helper.js'

const app = express()

app.get('/', async (req, res) => {
    const result = await PostgresHelper.query('SELECT * FROM users')
    res.send(JSON.stringify(result))
})

app.listen(3000, () => console.log('Server is running on port 3000'))
