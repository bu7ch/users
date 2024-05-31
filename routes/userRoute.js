const { allUsers } = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.get("/", allUsers);

module.exports = userRouter;
