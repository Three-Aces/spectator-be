import { Router } from "express";
import RoleControllers from '../controllers/roleControllers'

const router = Router()

router.put('/assignRole', RoleControllers.changeRole)

export default router