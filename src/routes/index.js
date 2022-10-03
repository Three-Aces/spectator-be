import express from 'express';
const router = express.Router();
import userRoutes from './userRoutes';
import testRoutes from './testRoutes'

router.get('/', (req, res)=>{
    res.send('routes from documentation')
})
router.use('/users', userRoutes)
router.use('/test', testRoutes)

export default router;