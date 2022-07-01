const express = require("express");
const friendsRouter = require("./routers/friends.router");
const messageRouter = require("./routers/message.router");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = new Date();
  next();
  const end = Date.now() - start;
  console.log(`From ${req.baseUrl} Time:${end}.ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messageRouter);

app.get("/", (req, res) => {
  res.render('index',{
    title:"Pequeño litele",
    caption:"Lalolanda"
  })
});

app.listen(port, () => {
  console.log(`server listening`);
});
