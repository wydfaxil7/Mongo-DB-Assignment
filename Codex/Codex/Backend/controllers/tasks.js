const Tasks=require('../model/tasks');


const allTasks=async(req,res)=>{
    
try {
    const tasks=await Tasks.find({});
    
    res.json({tasks,hbTasks:tasks.length}); 
} catch (error) {
    console.log(error);
}
   
}

const addTask=async(req,res)=>{
    try {
        const {title,para}=req.body;

        if(!title || !para){
            throw 'Fill empty fields';  
        }
        
        const tasks=await Tasks.create({title,para});
        
        res.json(tasks);
    } catch (error) {
        console.log(error)
    }
  

}


const deletetask=async(req,res)=>{
    const id=req.params.id;

try {
   
    const delTask=await Tasks.findByIdAndRemove({_id:id})
    if(!delTask){
        throw 'No note found to delete';
    }
    res.status(200).json(delTask);
} catch (error) {
    console.log(error)
}
   
}

module.exports={allTasks,addTask,deletetask}