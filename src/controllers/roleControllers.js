import {Role} from '../database/models'
import { findRoleByName } from '../services/roleServices'
import { userExist } from '../services/userServices';

export default class RoleControllers {
    static changeRole = async (req, res)=>{
        const email = req.body.email
        const role = req.body.role

        const roleName = await findRoleByName(role);
        const user = await userExist(email)
    
        return res.status(200).json({roleName})
        // if(roleName && user){
        //     user.update({
        //         role
        //     })
        //     return res.status(200).json({user, message: 'updated'})
        // }
        // else{
        //     return res.status(404).json({message: 'role or user doesn\'t exits'})
        // }
    } 

}