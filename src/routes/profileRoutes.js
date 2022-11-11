import { Router } from "express";
import ProfileControllers from "../controllers/profileControllers";
import isAuthenticated from '../middlewares/Authorization';
import upload from '../../uploadImage'

const router = Router()



router.get('/', isAuthenticated, ProfileControllers.GetProfileInfo)
router.put('/', isAuthenticated, upload.single('profile_image'), ProfileControllers.UpdateProfileInfo )

export default router