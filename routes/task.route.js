const express=require("express");
const {Taskmodel}=require("../models/task.models");

const taskRouter=express.Router();

taskRouter.get("/",async(req,res)=>{
    try{
     let data=await Taskmodel.find()
     res.send(data)
    }
    catch(err){
        console.log(err)
    }

})

taskRouter.post("/add",async(req,res)=>{
    try{
        const payload=req.body;
        try{
    const new_task=new Taskmodel(payload)
    await new_task.save();
    res.send("Created the task")
        }
        catch(err){
            console.log(err)
        }
    }
    catch(err){
        console.log(err)
    }
})

taskRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body;
    const ID=req.params.id;
    try{
await Taskmodel.findByIdAndUpdate({_id:ID},payload)
res.send("updated the tasks")
    }
    catch(err){
     console.log(err)
    }
     
     })
    



module.exports={taskRouter};