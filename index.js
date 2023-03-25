const express=require("express");
const {connection}=require("./config/db");
const {taskRouter}=require("./routes/task.route");
require("dotenv").config();
const cors=require("cors");
const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.use("/",taskRouter)


app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log(`port is running on ${process.env.port}`)
    }
    catch(err){
        console.log(err)
    }
})