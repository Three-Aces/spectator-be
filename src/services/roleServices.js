import { userExist } from "./userServices"
import {User, Role} from '../database/models'

const updateUserRole = async (email, role)=>{
    const user = await userExist(email);
    if(user){
        const updatedUser = await User.update({
            role
            }, 
            { where: { email }
        })

        return updatedUser
    }
}

const findRoleByName = async (roleName)=>{
    // const role = await Role.findOne({
    //     where: {roleName}
    // })
    const role = await Role.findAll()

    return role
}


export {
    updateUserRole,
    findRoleByName
}