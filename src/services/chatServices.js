import socket from "socket.io";
import { server } from "../server";
import {Chat} from "../database/models"
import verifyToken from "../helpers/verifyToken";
let decodedToken;
// Socket setup
const io = socket(server,{
    cors: {
        "Access-Control-Allow-Origin": "*",
        origin: "*"
      }
});

// registering authentication middleware
// middleware for authentication
io.use(async (socket, next) => {
    const { token } = socket.handshake.auth;
    try {
      if (token) {
        decodedToken = await verifyToken(token)
        socket.decodedToken = decodedToken;
        // console.log('cred', decodedToken.user)
        return next();
      }
      throw new Error("User not authorized ");
    } catch (error) {
      return next(error);
    }
});

let onlineUsers = 0;
export const ipsconnected = {};

io.on('connection', (socket)=>{
    console.log('user connected', socket.id)
    const user = socket.decodedToken.user
    
    const connectedUser = socket.id; // for real app use user.id or socket.handshake.address
    if (!ipsconnected.hasOwnProperty(connectedUser)) {
        ipsconnected[connectedUser] = {
        socket,
        user: socket.decodedToken.user
        };
        onlineUsers += 1;
        io.emit("online", onlineUsers);
    }
    // associate connected socket to user
    io.to(socket.id).emit("onLoad", user);
    
    socket.on('message', async(data)=>{
        console.log('message', data)
        const savedChat = await Chat.create({
            message: data,
            userId: user.id,
            timeStamp: Date.now(),
        })

        socket.emit('saved', {savedChat})
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})



io.on('disconnect', (socket) => {
    console.log('user disconnected', socket);
  });

export default io
