const {friendsModel} =require('../models/friend.model')

function getFriends(req, res) {
  res.json(friendsModel);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const objFriend = friendsModel[friendId];
  if (objFriend) {
    res.json(objFriend);
  } else {
    res.status(404, { text: "Not found" });
  }
}

function postFriend(req, res) {
  if (!req.body.name) return res.status(400, "not found object");
  const friend = {
    name: req.body.name,
    id: friendsModel.length,
  };
  friendsModel.push(friend);

  res.status(200).jsonp("usuario agendado con exitop");
}

module.exports = {
  postFriend,
  getFriend,
  getFriends,
};
