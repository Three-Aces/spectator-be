import express from'express'
import {login, signup, verifyUser} from'../controllers/authControllers'
import AuthValidation from '../validationSchema/validation';

const router = express.Router()

router.post('/signup', AuthValidation.verifySignup, signup)
router.post('/login',login )
router.get('/verify/:token', verifyUser)


export default router