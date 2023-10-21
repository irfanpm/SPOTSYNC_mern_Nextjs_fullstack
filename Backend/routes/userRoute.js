var express = require("express")
var user = express.Router()
const { Login ,Register,Profile, editavatar } = require('../controller/user')
const userAuth=require('../middleware/userJWTAuthentication')


user.post('/user/register',Register)
user.post('/user/login', Login)    
user.get('/user/profile',userAuth,Profile)
user.put('/user/profile/avatar',userAuth,editavatar)


module.exports=user