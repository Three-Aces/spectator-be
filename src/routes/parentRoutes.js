import express from'express'
import { getStudentByParent } from'../controllers/studentControlers'
import isAuthenticated from '../middlewares/Authorization';
import isParent from '../middlewares/isParent';

const router = express.Router()

router.get('/students', isAuthenticated, getStudentByParent)

export default router
