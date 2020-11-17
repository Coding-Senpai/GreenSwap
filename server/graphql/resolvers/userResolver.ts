import { UserInputError } from 'apollo-server-express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { validateRegisterInput } from '~server/util/validators'
import UserModel, { IUser } from '../../models/User'

const generateToken = (user: IUser) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: '1h' }
  )
}

export default {
  // Query
  Query: {
    user: (_, username) => {},
  },
  // Mutation
  Mutation: {
    updateUser: (_, newName, context) => {},
    registerUser: async (
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) => {
      const { valid, errors } = validateRegisterInput({
        username,
        email,
        password,
        confirmPassword,
      })

      if (!valid) {
        throw new UserInputError('Errors', { errors })
      }

      const user = await UserModel.findOne({ username })
      if (user) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken',
          },
        })
      }

      // hash password and create an auth token
      password = await bcrypt.hash(password, 12)

      const newUser = new UserModel({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      })

      const res = await newUser.save()

      const token = generateToken(res)

      return {
        id: res._id,
        token,
        email: res.email,
        username: res.username,
        createdAt: res.createdAt,
      }
    },
  },
}
