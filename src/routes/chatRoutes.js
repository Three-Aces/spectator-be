import express from'express'
import { chat, findAllChats } from '../controllers/chatControllers';

const router = express.Router()

router.get('/', findAllChats)

export default router
