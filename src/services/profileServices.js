import {Profile} from '../database/models'

const createUserProfile = async (userData)=>{
    const profile = await Profile.create({
        userId: userData.id,
        phone: userData.phone
    });
      return profile;
  }
 
 

export {
    createUserProfile,
}