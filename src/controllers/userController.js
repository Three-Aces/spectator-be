import {User} from '../database/models/index';
import { phoneExist, userExist } from '../service/userServices';

  const signup = async(req, res)=>{
    const{password, username, email, phone} = req.body

    // console.log(req.body)
    const user = await userExist(email)
    if(user){
      console.log('email already or phone exist')
    }else{

    const newUser = await User.create(req.body)
    if(newUser){
      console.log('user saved')
      res.send(newUser)
    }else{
      console.log('failed to save')
    }
  }

  // to phone
  const used = await phoneExist (phone)
  if(used){
    console.log('phone already  exist')
  }
  else{

    const newUser = await User.create(req.body)
    if(newUser){
      console.log('user saved')
      res.send(newUser)
    }else{
      console.log('failed to save')
    }
  }
}

export {
 signup
}

// //importing modules
// import bcrypt from"bcrypt";
// // import db from "../database/models/index";
// import jwt from "jsonwebtoken";
// import {User} from "../database/models/index"
// // Assigning users to the variable User
// // const User = db.users;
// // 
// //signing a user up
// //hashing users password before its saved to the database with bcrypt
// const signup = async (req, res) => {
//  try {
//    const { username, email,phone, password } = req.body;
//    const data = {
//      username,
//      email,
//      phone,
//      password: await bcrypt.hash(password, 10),
//    };
//    //saving the user
//    const user = await User.create(data);

//    //if user details is captured
//    //generate token with the user's id and the secretKey in the env file
//    // set cookie with the token generated
//    if (user) {
//      let token = jwt.sign({ id: user.id }, process.env.SECRETKEY, {
//        expiresIn: 1 * 24 * 60 * 60 * 1000,
//      });

//      res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
//      console.log("user", JSON.stringify(user, null, 2));
//      console.log(token);
//      //send users details
//      return res.status(201).send(user);
//    } else {
//      return res.status(409).send("Details are not correct");
//    }
//  } catch (error) {
//    console.log(error);
//  }
// };


// //login authentication

// const login = async (req, res) => {
//  try {
// const { email, password } = req.body;

//    //find a user by their email
//    const user = await User.findOne({ email });

//    //if user email is found, compare password with bcrypt
//    if (user) {
//      const isSame = await bcrypt.compare(password, user.password);

//      //if password is the same
//       //generate token with the user's id and the secretKey in the env file

//      if (isSame) {
//        let token = jwt.sign({ user }, process.env.SECRETKEY, {
//          expiresIn: 1 * 24 * 60 * 60 * 1000,
//        });

//        //if password matches wit the one in the database
//        //go ahead and generate a cookie for the user
//        res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
//        console.log("user", JSON.stringify(user, null, 2));
//        console.log(token);
//        //send user data
//        return res.status(201).send(user);
//      } else {
//        return res.status(401).send("Authentication failed");
//      }
//    } else {
//      return res.status(401).send("Authentication failed");
//    }
//  } catch (error) {
//    console.log(error);
//  }
// };

// export {
//  signup,
//  login,
// };