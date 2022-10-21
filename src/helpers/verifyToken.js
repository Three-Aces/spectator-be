import { decode, verify } from "jsonwebtoken"
const verifyToken = async(token)=>{
    const data = await verify(token, process.env.SECRETKEY)
    return data
}

export default verifyToken