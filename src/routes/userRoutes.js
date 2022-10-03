//importing modules
import express from'express'
import {login, signup} from'../controllers/userController'
// const { signup, login } = userController
import saveUser from '../middlewares/userAuth'
const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', signup)



router.post('/login',login )
export default router