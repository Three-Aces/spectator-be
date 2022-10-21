import express from'express'
import {login, signup, verifyUser, signout} from'../controllers/authControllers'
import AuthValidation from '../validationSchema/validation';
import isAuthenticated from '../middlewares/Authorization';
import { sessions } from '../controllers/authControllers';

const router = express.Router()

router.post('/signup', AuthValidation.verifySignup, signup)
router.post('/login',login )
router.get('/verify/:token', verifyUser)
router.post("/signout", isAuthenticated, signout);
router.get('/sessions', isAuthenticated, sessions)


export default router