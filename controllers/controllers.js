const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
}

async function displayMessage(req, res) {
  const index = parseInt(req.params.index, 10);
  const singleMessage = await db.getSingleMessage(index);
  if (!singleMessage) {
    return res.status(404).send("Message not found");
  }
  res.render("message", { message: singleMessage });
}

function renderNewForm(req, res) {
  res.render("form");
}

async function submitNewMessage(req, res) {
  await db.addNewMessage(req.body.messageText, req.body.messageUser);
  res.redirect("/");
}

module.exports = {
  getMessages,
  displayMessage,
  renderNewForm,
  submitNewMessage,
};

// async function getUsernames(req, res) {
//   if (req.query.search) {
//     console.log("req query is", req.query.search);

//     const searchResults = await db.searchUsernames(req.query.search);
//     console.log(searchResults);
//     return res.send(
//       "Usernames found that include the search term: " +
//         req.query.search +
//         " : " +
//         searchResults.map((user) => user.username).join(", ")
//     );

//     res.send(`query is ${searchResults}`);
//   } else {
//     const usernames = await db.getAllUsernames();
//     console.log("Usernames: ", usernames);
//     res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
//   }
// }

// async function deleteAllUsers(req, res) {
//   await db.deleteAllUsers();
//   console.log("delete all users");
//   res.redirect("/");
// }
