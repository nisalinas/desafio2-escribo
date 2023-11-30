import { PrismaUsersRepository } from '../../repositories/prisma/prisma-users-repository.js'
import { RegisterUseCase } from '../register.js'

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository()
  const useCase = new RegisterUseCase(usersRepository)

  return useCase
}
