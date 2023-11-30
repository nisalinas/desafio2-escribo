import bcryptjs from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error.js'
const { hash } = bcryptjs

export class RegisterUseCase {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password, phone, ddd }) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const passwordHash = await hash(password, 8)

    const user = await this.usersRepository.create({
      name,
      email,
      passwordHash,
      phone,
      ddd,
    })

    return {
      user,
    }
  }
}
