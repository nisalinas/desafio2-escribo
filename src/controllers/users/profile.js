import jwt from 'jsonwebtoken'
import { verifyToken } from '../../auth/jwt.js'
import { makeGetUserProfileUseCase } from '../../use-cases/factories/make-get-user-profile-use-case.js'
const { TokenExpiredError, JsonWebTokenError } = jwt

export async function profile(req, res) {
  const accessToken = req.headers.authorization.replace('Bearer ', '')

  try {
    const useCaseGetUserProfile = makeGetUserProfileUseCase()

    const userPayload = verifyToken(accessToken)

    const { user } = await useCaseGetUserProfile.execute({
      userId: userPayload.sub,
    })

    return res.json({
      ...user,
      password_hash: undefined,
    })
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      return res.status(401).json({ mensagem: 'Sessão inválida' })
    }

    if (
      error instanceof JsonWebTokenError &&
      !(error instanceof TokenExpiredError)
    ) {
      return res.status(401).json({ mensagem: 'Não autorizado' })
    }
  }
}
