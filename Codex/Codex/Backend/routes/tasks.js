const express=require('express');
const router=express.Router();
const {allTasks,addTask,deletetask}=require('../controllers/tasks');



router.get('/all',allTasks);
router.post('/add',addTask);
router.delete('/delete/:id',deletetask);



module.exports=router;




