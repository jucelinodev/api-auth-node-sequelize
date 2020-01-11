import jwt from 'jsonwebtoken'

import User from '../models/User'

import { secret, expiresIn } from '../../config/auth'

class SessionController {
  async store (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(404).json({ error: ' User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' })
    }
    const { id, name } = user

    res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, secret, { expiresIn })
    })
  }
}

export default new SessionController()
