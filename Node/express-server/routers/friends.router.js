const express = require("express");
const friendContrtoller=require('../controllers/friends.controller')

const friendsRouter = express.Router();

friendsRouter.use((req,res,next)=>{
   console.log("Req ip:",req.ip) 
    next();
})


friendsRouter.get("/", friendContrtoller.getFriends);
friendsRouter.get("/:friendId", friendContrtoller.getFriend);
friendsRouter.post("/", friendContrtoller.postFriend);

module.exports = friendsRouter;
