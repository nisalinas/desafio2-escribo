import { generateToken } from '../../auth/jwt.js'
import { UserAlreadyExistsError } from '../../use-cases/errors/user-already-exists-error.js'
import { makeRegisterUseCase } from '../../use-cases/factories/make-register-use-case.js'

export async function register(req, res) {
  const { nome, email, senha, telefones } = req.body
  const { numero, ddd } = telefones[0]

  try {
    const registerUseCase = makeRegisterUseCase()

    const { user } = await registerUseCase.execute({
      name: nome,
      email,
      password: senha,
      phone: numero,
      ddd,
    })

    const accessToken = generateToken({ sub: user.id })

    return res.status(201).json({
      id: user.id,
      data_criacao: user.created_at,
      data_atualizacao: user.updated_at,
      ultimo_login: user.last_login,
      token: accessToken,
    })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return res.status(400).json({ mensagem: 'E-mail já existente' })
    }
  }
}
