import socket from "socket.io";
import { server } from "../server";

// Socket setup
const io = socket(server,{
    cors: {
        "Access-Control-Allow-Origin": "*",
        origin: "*"
      }
});

io.on('connection', (socket)=>{
    console.log('user connected', socket.id)
    
    socket.on('message', (data)=>{
        console.log('message', data)
    })

    socket.on('disconnect', ()=>{
        console.log('user disconnected')
    })
})



io.on('disconnect', (socket) => {
    console.log('user disconnected', socket);
  });

export default io
