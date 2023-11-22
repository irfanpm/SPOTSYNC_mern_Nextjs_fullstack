const express=require('express')
const admin=express.Router()
const {getAllService,getAllUser,getCategoryService,getServiceById,getBlockedUser,isBlockService,isBlockUser,getBlockService}=require('../controller/admin')
const adminAuth=require('../middleware/adminJWTAuthenticaton')
const errorMiddleware=require('../middleware/tryCatchMiddleware')

admin.get('/admin/getusers',adminAuth,errorMiddleware(getAllUser))
admin.get('/admin/getservices',adminAuth,errorMiddleware(getAllService))
admin.post('/admin/getservice',adminAuth,errorMiddleware(getServiceById))
admin.get('/admin/getblockuser',adminAuth,errorMiddleware(getBlockedUser))
admin.get('/admin/getblockservice',adminAuth,errorMiddleware(getBlockService))

admin.post('/admin/userblock',adminAuth,errorMiddleware(isBlockUser))
admin.post('/admin/serviceblock',adminAuth,errorMiddleware(isBlockService))



module.exports=admin