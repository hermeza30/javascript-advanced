const express = require('express');
const messageController=require('../controllers/message.controller');
const messageRouter=express.Router();

messageRouter.use((req,res,next)=>{
    console.log("Url",req.url)
    next();
});
messageRouter.get('/',messageController.getMessages)
messageRouter.post('/',messageController.postMessages)
module.exports=messageRouter