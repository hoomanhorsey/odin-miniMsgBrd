const { Router } = require("express");
const router = Router();

const controller = require("../controllers/controllers");

router.get("/", controller.getMessages);
router.get("/message/:index", controller.displayMessage);

// Create controller file for /new, get and post

router.get("/new", controller.renderNewForm);

router.post("/new", controller.submitNewMessage);

// New to separate the logic here into contrlloer and query
router.post("/new", controller.submitNewMessage);

module.exports = router;
