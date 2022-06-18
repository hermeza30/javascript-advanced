const express = require("express");
const app = express();
const port = 3000;

const friends = [
  {
    id: 0,
    name: "Albert einsteing",
  },
];

app.get("/", (req, res) => {
  res.sendStatus(200, "Ingresado");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const objFriend = friends[friendId];
  if (objFriend) {
    res.json(objFriend);
  } else {
    res.status(404, { text: "Not found" });
  }
});

app.get("/messages", (req, res) => {
  res.json({ text: "En mensajes" });
});

app.use(function(req,res,next){

})

app.listen(port, () => {
  console.log(`server listening`);
});
