import { PostgresHelper } from '../../repositories/Postgres/Helper.js'

export class PostgresGetUserByIdRepository {
    async execute(userId) {
        const user = await PostgresHelper.query(
            'SELECT * FROM users WHERE id = $1',
            [id],
        )

        return user[0]
    }
}