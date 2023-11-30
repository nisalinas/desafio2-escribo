import { prisma } from '../../lib/prisma.js'

export class PrismaUsersRepository {
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async create(data) {
    const newUser = prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password_hash: data.passwordHash,
        phone: data.phone,
        ddd: data.ddd,
      },
    })

    return newUser
  }

  async save(data) {
    const updatedUser = await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    })

    return updatedUser
  }
}
