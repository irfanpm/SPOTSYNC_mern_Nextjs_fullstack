const express=require('express')
const admin=express.Router()
const {getAllService,getAllUser,getCategoryService,getServiceById,getUserById,isBlockService,isBlockUser}=require('../controller/admin')
const adminAuth=require('../middleware/adminJWTAuthenticaton')

admin.gwt('/admin/getusers',getAllUser)
admin.get('/admin/getservices',getAllService)
admin.post('/admin/getservice',getServiceById)
admin.post('/admin/getuser',getUserById)
admin.post('/admin/userblock',isBlockUser)
admin.post('/admin/serviceblock',isBlockService)



module.exports=admin