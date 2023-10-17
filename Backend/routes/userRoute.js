var express = require("express")
var user = express.Router()
const { Login ,Register,Profile } = require('../controller/user')



user.post('/user/register',Register)
user.post('/user/login', Login)    
user.post('/user/profile',Profile)



module.exports=user