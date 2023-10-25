var express = require("express")
var service = express.Router()
const {addsevice,getService}=require('../controller/serviceProvider')
const userAuth=require('../middleware/userJWTAuthentication')

service.post('/service/addservice',userAuth,addsevice)
service.get('/service/showservice',userAuth,getService)


module.exports=service