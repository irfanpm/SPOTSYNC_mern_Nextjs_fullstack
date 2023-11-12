const serviceSchema = require('../model/serviceProvider')
const userSchema=require('../model/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports={
    
getAllUser:async(req,res)=>{
    const user=await userSchema.find()
    if (user){
        res.status(200).json({
            status: "success",
            message: "successfully fetched user",
            data:user
           
          });


    }else{
        res.json({
            message:"failed"
        })
    }
},
getAllService:async(req,res)=>{
    const service=await serviceSchema.find()
    if(service){
        res.status(200).json({
            status: "success",
            message: "successfully fetched service",
            data:service
           
          });
    }else{
        res.json({
            message:"failed"
        })
    }

},
getBlockedUser:async(req,res)=>{
    const user=await userSchema.find({isBlock:true})
    if(user){
        res.status(200).json({
            status: "success",
            message: "successfully fetched user data",
            data: user,
          });
    }else{
        res.json({
            message:"failed"
        })
    }
},
getServiceById: async(req,res)=>{
    const {id}=req.body
    const service=await serviceSchema.find({_id:id})
    if(service){
        res.status(200).json({
            status: "success",
            message: "successfully fetched user data",
            data: service,
          });

    }

},
getBlockService: async(req,res)=>{
    const service=await serviceSchema.find({isBlock:true})
    if(service){
        res.status(200).json({
            status: "success",
            message: "successfully fetched user data",
            data: service,
          });

    }

},
getCategoryService:async(req,res)=>{
    const {category}=req.body
    const service=await serviceSchema.find({Category:category})
    if(service){
        res.status(200).json({
            status: "success",
            message: "successfully fetched user data",
            data: service,

          });

    }else{
        res.json({
            message:"failed"
        })

    }
},
isBlockUser:async(req,res)=>{
    const {id}=req.body
    const user=await userSchema.findOne({_id:id})
    if(user){
        if(user.isBlock==false){
            user.isBlock=true
            user.save()
          return  res.status(200).json({
                status: "success",
                message: "successfully block user ",
                data:user.isBlock
    
              });
     

        }else{
            user.isBlock=false
            user.save()
          return  res.status(200).json({
                status: "success",
                message: "successfully unblock user ",
                data:user.isBlock
    
              });
        }
      
        

}else{
    res.json({
        status:"failure",
        message:"data already exist in database",


    })
}


},
isBlockService:async(req,res)=>{
    const{id}=req.body
    const user=await serviceSchema.findOne({_id:id})
    if(user){
        if(user.isBlock==false){
            user.isBlock=true
           await user.save()
          return  res.status(200).json({
                status: "success",
                message: "successfully block service "
    
              });
     

        }else {
            user.isBlock=false
            await user.save()
return res.status(200).json({
                status: "success",
                message: "successfully unblock service"

              });
        }
      
        

}else{
    res.status(409).json({
        status:"failure",
        message:"data already exist in database",


    })
}

    

},







}