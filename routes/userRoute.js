const { allUsers, createUser } = require("../controllers/userController");

const userRouter = require("express").Router();

userRouter.get("/", allUsers);
userRouter.post("/new", createUser)

module.exports = userRouter;
