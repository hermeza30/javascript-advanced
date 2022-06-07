const EventEmmiter = require("events");
const celebrity = new EventEmmiter();
//Observer1
celebrity.on("race", (results) => {
  if (results === "win") console.log("Congratulation", results);
});
//Observer2
celebrity.on("race", (results) => {
  if (results === "win") console.log("Congratulation 2", results);
});
//Observer3
celebrity.on("race", (results) => {
  if (results === "lost") {
    console.log("Congratulation lost", results);
  }
});
celebrity.emit("race", "lost");
celebrity.emit("race", "win");

process.on("exit", () => {
  console.log("Exit de process");
});
