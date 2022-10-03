import {User} from '../database/models/index';
import { phoneExist, userExist, createUser } from '../services/userServices';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import assignToken from '../helpers/assignToken';


  const signup = async(req, res)=>{
    try {
    const{ email, phone} = req.body;

    const exist = await userExist(email)
    if(exist){
      return res.json({success: false, statusCode: 409, message: 'email already exists'})
    }

    const puser= await phoneExist(phone)
    if(puser){
      return res.json({success: false, statusCode: 409, message: 'phone already exist'})
    }
    const newUser = await createUser(req.body)

    if(newUser){
      const userToken = assignToken(newUser)
      return res.json({success: true, statusCode: 201, regToken: userToken, data: newUser})
    }

    } catch (error) {
      return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
    }
    
  

  
}
// login authentication
const login=async(req,res)=>{
  const{password,email} = req.body;
  const user = await User.findOne({ email });
  // if user email is found, compare passwordwith bcrypt
  if (user) {
    const isSame = await bcrypt.compare(password, user.password);

    //if password is the same
     //generate token with the user's id and the secretKey in the env file

    if (isSame) {
      let token = jwt.sign({ user }, process.env.SECRETKEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });

      //if password matches wit the one in the database
      //go ahead and generate a cookie for the user
      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
      console.log("user", JSON.stringify(user, null, 2));
      console.log(token);
      //send user data
      return res.status(200).send(user);
    } else {
      return res.status(401).send("Authentication failed");
    }
  }
  // else {
  //   return res.status(401).send("Authentication failed");
  // } 
}


export {
 signup,
 login
}

