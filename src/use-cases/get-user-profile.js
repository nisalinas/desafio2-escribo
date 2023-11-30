import { ResourceNotFoundError } from './errors/resource-not-found-error.js'

export class GetUserProfileUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ userId }) {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError('Resource not found.')
    }

    return {
      user,
    }
  }
}
