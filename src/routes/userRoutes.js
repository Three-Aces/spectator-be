//importing modules
import express from'express'
import {signup} from'../controllers/userController'
// const { signup, login } = userController
import saveUser from '../middlewares/userAuth'
const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', signup)

//login route
// router.post('/login', login )
router.get('/all', (req, res)=>{
 res.send('here it is all users')
})

export default router