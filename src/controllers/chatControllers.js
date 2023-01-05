import chatControllers from '../services/chatServices'
import {Chat} from '../database/models'

export const findAllChats = async(req, res)=>{
    const chats = await Chat.findAll({order:['timeStamp']})
    return res.status(200).json({
        count: chats.length,
        chats
    })
} 
