import {User} from '../database/models/index';
import { phoneExist, userExist } from '../service/userServices';
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

  const signup = async(req, res)=>{
    const{password, username, email, phone} = req.body;
  
    
    // console.log(req.body)
    const user = await userExist(email)
    if(user){
      console.log('email already or phone exist')
    }
    const puser= await phoneExist(phone)
    if(puser){
      console.log('phone already exist')
    }
    else{

    const newUser = await User.create(req.body)
    if(newUser){
      const userr={newUser}
      const token=jwt.sign({userr}, process.env.SECRETKEY, {
        expiresIn: 1 * 24 * 60 * 60 * 1000,
      });
      
      res.json({
        token:token
      })
      console.log('user saved')
      res.send(newUser)
    }else{
      console.log('failed to save')
    } 
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

