const path=require('path');
function getMessages(req,res){
    // res.sendFile(path.join(__dirname,'..','public','images','skimountain.jpeg'))
    res.render('messages',{
        title:"Mensaje para amigos",
        friend:'Tony',
        message:"Hola guachos"
    })
};
function postMessages(req,res){
    res.json({text:"mensaje añadido con exito"})
}

module.exports={
    getMessages,
    postMessages
}


