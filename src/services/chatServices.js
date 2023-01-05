import socket from "socket.io";
import { server } from "../server";
import {Chat} from "../database/models"

// Socket setup
const io = socket(server,{
    cors: {
        "Access-Control-Allow-Origin": "*",
        origin: "*"
      }
});

io.on('connection', (socket)=>{
    console.log('user connected', socket.id)
    
    socket.on('message', async(data)=>{
        console.log('message', data)
        const savedChat = await Chat.create({
            message: data,
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
