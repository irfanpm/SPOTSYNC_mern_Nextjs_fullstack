const express=require('express')
const admin=express.Router()
const {getAllService,getAllUser,getCategoryService,getServiceById,getBlockedUser,isBlockService,isBlockUser,getBlockService}=require('../controller/admin')
const adminAuth=require('../middleware/adminJWTAuthenticaton')

admin.get('/admin/getusers',adminAuth,getAllUser)
admin.get('/admin/getservices',adminAuth,getAllService)
admin.post('/admin/getservice',adminAuth,getServiceById)
admin.get('/admin/getblockuser',adminAuth,getBlockedUser)
admin.get('/admin/getblockservice',adminAuth,getBlockService)

admin.post('/admin/userblock',adminAuth,isBlockUser)
admin.post('/admin/serviceblock',adminAuth,isBlockService)



module.exports=admin