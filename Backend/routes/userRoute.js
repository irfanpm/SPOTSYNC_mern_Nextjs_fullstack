var express = require("express")
var user = express.Router()
const { Login ,Register,Profile, editavatar,findService,getService ,review} = require('../controller/user')
const userAuth=require('../middleware/userJWTAuthentication')


user.post('/user/register',Register)
user.post('/user/login', Login)    
user.get('/user/profile',userAuth,Profile)
user.put('/user/profile/avatar',userAuth,editavatar)
user.get('/user/showservice',getService)
user.post('/user/findservice',findService)
user.post('/user/review',userAuth,review)

module.exports=user