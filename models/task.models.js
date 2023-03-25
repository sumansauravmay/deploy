const mongoose=require("mongoose");


const modelSchema=mongoose.Schema({
    id:Number,
    assignee:String,
    task_type:String,
    description:String,
    status:String
})

Taskmodel=mongoose.model("task",modelSchema)


module.exports={Taskmodel}
