import express from'express'
import {login, signup} from'../controllers/authControllers'
import AuthValidation from '../validationSchema/validation';

const router = express.Router()

router.post('/signup', AuthValidation.verifySignup, signup)
router.post('/login',login )



export default router