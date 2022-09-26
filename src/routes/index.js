import express from 'express';
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('routes from documentation')
})

export default router;