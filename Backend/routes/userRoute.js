var express = require("express")
var user = express.Router()
const { Login ,Register } = require('../controller/user')


user.post('/user/register',Register)
user.post('/user/login', Login)    



module.exports=user