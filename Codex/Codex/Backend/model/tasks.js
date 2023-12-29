const Mongoose=require('mongoose');

const taskSchema=new Mongoose.Schema({
 
    title:{
        type:String,
        required:true,
    },
    para:{
        type:String,
        required:true,
    },
})

module.exports=Mongoose.model('tasks',taskSchema);