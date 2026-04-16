import { PostgresGetUserByIdRepository } from '../db/postgres/repositories/postgres/get-user-by-id.js'

export class GetUserByIdUseCase {
    async execute(userId) {
        const getuserByIdRepository = new PostgresGetUserByIdRepository()

        const user = await getuserByIdRepository.execute(userId)

        return user
    }
}
