import { PostgresHelper } from '../../postgres/Helper.js'

export class PosgresGetUserByEmailRepository {
    async execute(email) {
        const user = await PostgresHelper.query(
            'SELECT * FROM users WHERE email = $1',
            [email],
        )

        return user[0]
    }
}
