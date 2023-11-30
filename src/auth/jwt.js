import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {
  if (!process.env.JWT_SECRET_KEY) {
    throw new Error('Please set a SECRET_KEY in environment variable!')
  }
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: '30m',
  })
}

export const verifyToken = (token) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
  return payload
}
