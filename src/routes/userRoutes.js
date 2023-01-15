//importing modules
import express from'express'
// import {login, signup} from'../controllers/userController'
import { listAllUsers, listAllParentUsers, listAllTeacherUsers } from '../controllers/usersController'

const router = express.Router()

// router.post('/signup', signup)
// router.post('/login',login )

router.get('/', listAllUsers)
router.get('/parents', listAllParentUsers)
router.get('/teachers', listAllTeacherUsers)

export default router
