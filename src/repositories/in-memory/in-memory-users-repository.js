import { randomUUID } from 'node:crypto'

export class InMemoryUsersRepository {
  items = []

  async findById(id) {
    const user = this.items.find((item) => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create(data) {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.passwordHash,
      phone: data.phone,
      ddd: data.ddd,
      createdAt: new Date(),
      updatedAt: data.updatedAt ?? undefined,
      lastLogin: data.lastLogin ?? undefined,
    }

    this.items.push(user)

    return user
  }

  async save(data) {
    const userIndex = this.items.findIndex((item) => item.id === data.id)

    if (userIndex >= 0) {
      this.items[userIndex] = data
    }

    return data
  }
}
