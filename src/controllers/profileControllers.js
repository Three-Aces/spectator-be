import {Profile} from '../database/models'
import cloudinary from '../../imageUploader'
import db from '../database/models'


export default class ProfileControllers{

    static async GetProfileInfo(req, res){
        const user = req.user
        const profile = await Profile.findOne({
            where:{userId: user.id},
            include: [
                {
                    model: db.User,
                    as: 'user',
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                }
                
            ]
         })
        if(Object.keys(profile).length === 0){
            return res.status(404).json({message: 'profile not available'})
        }
        return res.status(200).json({profile})
    };

    static async UpdateProfileInfo(req, res){
        try { 
            let profile_image;
            const { firstName, lastName, sex,country, phone} = req.body
           
            if(req.file){
                const cloud_save = await cloudinary.uploader.upload(req.file.path, {
					with:500,
					height:500,
					crop:'fill'
		
				})
                profile_image = cloud_save.url
            }
            const profile = await Profile.findOne({where: {userId: req.user.id}})
            if(profile){
                profile.firstName = firstName || profile.firstName,
                profile.lastName = lastName || profile.lastName,
                profile.sex = sex || profile.sex,
                profile.country = country || profile.country,
                profile.phone = phone || profile.phone,
                profile.profile_image = profile_image || profile.profile_image

                profile.save()
                return res.status(200).json({status: 200, message:"profile successfully updated!", profile});
            }
        } catch (error) {
            return res.status(500).json({message: error.message})
        }

        }
}
