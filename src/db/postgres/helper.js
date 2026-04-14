import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config()


const { Pool } = pg

export const pool = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
})

export const PostgresHelper = {
    query: async (query, params) => {
        const clinet = await pool.connect()

        const results = await clinet.query(query, params)

        await clinet.release()

        return results.rows
    },
}
