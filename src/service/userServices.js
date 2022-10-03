import {User} from '../database/models/index'
const userExist = async(email)=>{
  const exist = await User.findOne({
    where: {email}
  })
  if(exist){
    return true
  }
  return false
}
const phoneExist= async(phone)=>{
  const duplicate=await User.findOne({
    where:{phone}
  })
  if (duplicate){
    return true
  }
  return false
}


export 
{
  userExist,
  phoneExist
}
