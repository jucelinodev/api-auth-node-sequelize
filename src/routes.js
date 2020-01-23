import { Router } from 'express'

import UserController from './auth/controllers/UserController'
import SessionController from './auth/controllers/SessionController'

import validateUserStore from './auth/validator/UserStore'
import validateSessionStore from './auth/validator/SessionStore'

import authVerify from './auth/middlewares/authVerify'

const router = Router()

router.post('/user', validateUserStore, UserController.store)
router.post('/session', validateSessionStore, SessionController.store)

router.use(authVerify)

router.get('/', (req, res) => {
  res.json({ id: req.userId })
})

export default router
