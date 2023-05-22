const express = require("express")
const { signupUser, loginUser, logoutUser, generateNewAccessToken } = require("../control/user.control")

const userRouter = express.Router()

userRouter.post("/signup",signupUser)
userRouter.post("/login",loginUser)
userRouter.get("/logout",logoutUser)
userRouter.get("/refresh",generateNewAccessToken)

module.exports = {userRouter}