import { phoneExist, userExist, createUser, verifyUserAccount, createUserSession, deleteSession, getUserSessions } from '../services/userServices';
import bcrypt from 'bcrypt';
import assignToken from '../helpers/assignToken';
import verifyToken from '../helpers/verifyToken';
import sendVerificationEmail from '../helpers/sendEmail/sendVerificationEmail';
import {Profile} from '../database/models'
import { createUserProfile } from '../services/profileServices';


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
      sendVerificationEmail(userToken, newUser)

      
      
      return res.status(201).json({success: true, statusCode: 201, regToken: userToken, data: newUser})
    }

    } catch (error) {
      return res.json({success: false, statusCode: 500, error: error.message, message:'Internal server error'})
    }
    
  }

const login = async (req, res) => {
  const {email} = req.body
  try {
    const user = await userExist(email)
    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }
    if (!user.isVerified) {
      return res.status(400).json({ message: "User needs to be verified" });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Invalid Password!",
      });
    }
    const loginToken = assignToken(user)
    const ssn = await createUserSession({
      userId: user.id,
      token:loginToken,
      deviceType: req.headers["user-agent"],
      loginIp: req.ip,
      lastActivity: new Date().toJSON(),
    });
    
    return res.status(200).json({
      loginToken,
      ssn
    }); 
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const  signout = async(req, res)=> {
  try {
    console.log(req.user)
    if (!req.user || !req.headers["authorization"]) {
      return res.status(403).json({ message: 'user not logged in' });
    }

    const token = req.headers["authorization"].split(" ")[1];
    await deleteSession(null, req.user.id, token);
    return res.status(200).json({ message: 'logged out successful' });
  } catch (error) {
    return res.status(500).json({ message: 'unable to logout' });
  }
}

const sessions = async(req, res)=>{
  try {
    if (!req.user || !req.headers["authorization"]) {
 
      errorResponse(res, 403, "User not logged in");
    }

    const token = req.headers["authorization"].split(" ")[1];
    const ssn = await getUserSessions(token)
    return res.status(200).json({sessions: ssn.map((session) => session.dataValues)})
  } catch (error) {
    return res.status(500).json({message: 'internal server error', error: error.message})
  }
  
}

const verifyUser = async(req, res)=> {
  let data = {};
  try {
    data = await verifyToken(req.params.token);
    
  } catch (err) {
    return res.status(400).json({ message: `Invalid or expired Token.`});
  }
  try {
    const verified = await verifyUserAccount(data.user.email);
    if(verified){
      // create user profile
      const profile = await createUserProfile(data.user)
      
      return res.status(200).json({status: 200, message: "User verified successfully", profile});
    }
    return res.status(409).json({status: 409, message: "User already verified"});
  } catch (error) {
    return res.status(500).json({message: `Ooops! Unable to verify User ${error.message}`});
  }
}


export {
 signup, verifyUser, login, signout, sessions
}

