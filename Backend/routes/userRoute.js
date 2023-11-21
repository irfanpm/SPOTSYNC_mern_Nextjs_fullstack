var express = require("express")
var user = express.Router()
const { Login ,Register,Profile, editProfile,editavatar,findService,getService,review,displayreview,ratingAverage,favourite,showfavourite,showuserfavourite} = require('../controller/user')
const userAuth=require('../middleware/userJWTAuthentication')


user.post('/user/register',Register)
user.post('/user/login', Login)    
user.get('/user/profile',userAuth,Profile)
user.put('/user/profile/avatar',userAuth,editavatar)
user.put('/user/profile/edit',userAuth,editProfile)
user.post('/user/showservice',getService)
user.post('/user/findservice',findService)
user.post('/user/review',userAuth,review)
user.post('/user/displayreview',displayreview)
user.post('/user/avgreview',ratingAverage)
user.put('/user/favourite',userAuth,favourite)
user.get('/user/favourite',showfavourite)
user.get('/user/userfavourite',userAuth,showuserfavourite)



module.exports=user