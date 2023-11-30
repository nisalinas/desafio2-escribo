import { generateToken } from '../../auth/jwt.js'
import { InvalidCredentialsError } from '../../use-cases/errors/invalid-credentials-error.js'
import { makeAuthenticateUseCase } from '../../use-cases/factories/make-authenticate-use-case.js'

export async function authenticate(req, res) {
  const { email, senha } = req.body

  try {
    const useCaseAuthenticate = makeAuthenticateUseCase()

    const { user } = await useCaseAuthenticate.execute({
      email,
      password: senha,
    })

    const accessToken = generateToken({ sub: user.id })

    return res.json({
      id: user.id,
      data_criacao: user.created_at,
      data_atualizacao: user.updated_at,
      ultimo_login: user.last_login,
      token: accessToken,
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return res.status(401).json({ mensagem: 'Usuário e/ou senha inválidos' })
    }
  }
}
