import { Router } from 'express'

import UserController from './auth/controllers/UserController'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'ok' })
})

router.post('/user', UserController.store)

export default router
