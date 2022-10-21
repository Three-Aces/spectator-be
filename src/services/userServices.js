import {User} from '../database/models/index';
import bcrypt from 'bcrypt';


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
    const userPhone=await User.findOne({
      where:{phone}
    })
    if (userPhone){
      return true
    }
    return false
  }

  const createUser = async (userData)=>{
    userData.password = await bcrypt.hash(userData.password, 10)
    const user = await User.create(userData)
    return user;
  }


  const verifyUserAccount = async(email)=>{
    const user = await User.findOne({where: {email}})
    if(user.isVerified){
      return false
    }
    const data = await User.update(
      {
        isVerified: true,
      },
      {
        where: { email },
      }
    );
    return true;
  }


export {
  userExist, createUser, phoneExist, verifyUserAccount
}