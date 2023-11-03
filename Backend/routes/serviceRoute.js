var express = require("express")
var service = express.Router()
const {addsevice,getService,serviceLogin,deleteService,editService,findService}=require('../controller/serviceProvider')
const userAuth=require('../middleware/userJWTAuthentication')


service.post('/service/phone',userAuth,serviceLogin)
service.post('/service/addservice',userAuth,addsevice)
service.get('/service/showservice',userAuth,getService)
service.put('/service/deleteservice',userAuth,deleteService)
service.post('/service/findservice',userAuth,findService)
service.put('/service/editservice',userAuth,editService)

module.exports=service