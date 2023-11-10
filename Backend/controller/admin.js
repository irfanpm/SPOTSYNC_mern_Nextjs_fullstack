const serviceSchema = require('../model/serviceProvider')
const userSchema=require('../model/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()
module.exports={
    login: async(req,res)=>{

        const { username,password}=req.body
        if(username=='admin',password=="admin123"){
            let resp={
                id:'admin'
            }
            let token=jwt.sign({id:resp.id},process.env.ACESS_ADMIN_TOKEN_SECRET)
            if(token){
                res.status(200).json({
                    status: "success",
                    message: "successfully login ",
                    auth: true,
                    token: token,
                  });


            }else{
                res.json({
                    status:'error',
                     message: "failure" 
                    });

            }
}
},
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
getUserById:async(req,res)=>{
    const {id}=req.body
    const user=await userSchema.find({_id:id})
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
    const{id}=req.body
    const user=await userSchema.findOne({_id:id})
    if(user){
        if(user.isBlock==false){
            user.isBlock=true
            user.save()
            res.status(200).json({
                status: "success",
                message: "successfully block user "
    
              });
     

        }else{
            user.isBlock==false
            user.save()
            res.status(200).json({
                status: "success",
                message: "successfully unblock user "
    
              });
        }
      
        

}else{
    res.status(409).json({
        status:"failure",
        message:"data already exist in database",


    })
}
res.status(500).json({
    status: "failure",
    message: "Failed to process the request from server.",

})

},
isBlockService:async(req,res)=>{
    const{id}=req.body
    const user=await serviceSchema.findOne({_id:id})
    if(user){
        if(user.isBlock==false){
            user.isBlock=true
            user.save()
            res.status(200).json({
                status: "success",
                message: "successfully block service "
    
              });
     

        }else{
            user.isBlock==false
            user.save()
            res.status(200).json({
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
res.status(500).json({
    status: "failure",
    message: "Failed to process the request from server.",

})

},







}