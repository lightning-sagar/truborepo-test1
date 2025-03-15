import  express  from "express";
import {client} from "@repo/db/client"

const app = express(); //ts ->js 
app.use(express.json()); 
app.get("/",(req,res)=>{
    res.send("working");
})

app.post("/signup",async(req,res)=>{
    try {
        const {username,password} = req.body
        const user = await client.user.create({data:{username,password}})
        res.json({message:"signup sucessfull",user:user?.id})
    
    } catch (error) {
        console.log("problem : ",error)
    }
})

app.listen(3002)