import { Router } from 'express'

import UserController from './auth/controllers/UserController'
import SessionController from './auth/controllers/SessionController'

import ValidateUserStore from './auth/validator/UserStore'
import ValidateSessionStore from './auth/validator/SessionStore'

import authVerify from './auth/middlewares/authVerify'

const router = Router()

router.post('/user', ValidateUserStore, UserController.store)
router.post('/session', ValidateSessionStore, SessionController.store)

router.use(authVerify)

router.get('/', (req, res) => {
  res.json({ id: req.userId })
})

export default router
