const { Router } = require("express");

const messages = [
  {
    text: "Do you Poo?",
    user: "Ben",
    added: new Date(),
  },
  {
    text: "How do you do? I am Poo",
    user: "Andrew",
    added: new Date(),
  },
];

const router = Router();

// indexRouter.get("/", (req, res) => res.send("index"));

router.get("/", (req, res) =>
  res.render("index", { title: "Mini Message Board", messages: messages })
);

router.get("/new", (req, res) => res.render("form"));

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date(),
  });
  res.redirect("/");
});

router.get("/message/:index", (req, res) => {
  const index = parseInt(req.params.index, 10); // extracts the number from the URL

  res.render("message", { message: messages[index] });
});

module.exports = router;
