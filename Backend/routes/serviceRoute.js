var express = require("express")
var service = express.Router()
const {addsevice,getService,serviceLogin,deleteService,editService,findService,editserviceimg,addserviceimg,serviceReviews}=require('../controller/serviceProvider')
const userAuth=require('../middleware/userJWTAuthentication')


service.post('/service/phone',userAuth,serviceLogin)
service.post('/service/addservice',userAuth,addsevice)
service.get('/service/showservice',userAuth,getService)
service.put('/service/deleteservice',userAuth,deleteService)
service.post('/service/findservice',userAuth,findService)
service.put('/service/editservice',userAuth,editService)
service.put('/service/deleteimage',editserviceimg)
service.put('/service/addimage',addserviceimg)
service.get('/service/servicereviews',userAuth,serviceReviews)



module.exports=service