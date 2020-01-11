import { Router } from 'express'

import UserController from './auth/controllers/UserController'

import ValidateUserStore from './auth/validator/UserStore'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

router.post('/user', ValidateUserStore, UserController.store)

export default router
