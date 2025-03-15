import { WebSocketServer } from "ws"
import { client } from "@repo/db/client"

const server = new WebSocketServer({
    port:3001
})

server.on("connection",async(socket)=>{
    const user = await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })  
    
    socket.send("hi u are connected to the server")
})