import express from'express'
const router = express.Router()
import {signup} from '../controllers/userController'

router.get('/', signup)

export default router