import express from'express'
import {login, signup, verifyUser, signout, sessions} from'../controllers/authControllers'
import AuthValidation from '../validationSchema/validation';
import isAuthenticated from '../middlewares/Authorization';
import {  requestResetPassword, resetPassword, getResetPassword } from '../controllers/forgotPassword';

const router = express.Router()

router.post('/signup', AuthValidation.verifySignup, signup)
router.post('/login',login )
router.get('/verify/:token', verifyUser)
router.post("/signout", isAuthenticated, signout);
router.get('/sessions', isAuthenticated, sessions)
router.post('/forgot-password', requestResetPassword)
router.post('/reset-password/:token', resetPassword)
router.get('/reset-password/:token', getResetPassword)



export default router