export class GetUserByIdUseCase {
    async execute(userId) {
        const getuserByIdRepository = new PostgresGetUserByIdRepository()

        const user = await getuserByIdRepository.execute(userId)

        return user
    }
}