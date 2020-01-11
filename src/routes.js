import { Router } from 'express'

import UserController from './auth/controllers/UserController'
import SessionController from './auth/controllers/SessionController'

import ValidateUserStore from './auth/validator/UserStore'
import ValidateSessionStore from './auth/validator/SessionStore'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

router.post('/user', ValidateUserStore, UserController.store)
router.post('/session', ValidateSessionStore, SessionController.store)

export default router
