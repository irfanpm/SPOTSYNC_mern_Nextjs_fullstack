const serviceSchema=require('../model/serviceProvider')
const userSchema=require('../model/user')

module.exports={
    serviceLogin:async(req,res)=>{
        const {phone}=req.body
        const service=await userSchema.findOne({_id:res.token})
        if(service.MobileNumber){
            if(service.MobileNumber==phone){
                res.status(200).json({
                    status: "success",
                    message: "successfully enter service",
                })
            }else{
                res.json({status:"failed",message:"the doesnot match"})
            }

        }else{
         await userSchema.findByIdAndUpdate(res.token,{$set:{MobileNumber:phone}})
         res.status(200).json({
            status: "success",
            message: "successfully Login",
        })
          

        }


    },





    addsevice :async(req,res)=>{

        const {servicename,ownername,phone,category,streetaddress,state,city,zipcode,image,description,address,location,}=req.body
        
      const service=  await serviceSchema.create({
            userId:res.token,
            serviceName:servicename,
            OwnerName:ownername,
            Phone:phone,
            Category:category,
            StreetAdrress:streetaddress,
            State:state,
            City:city,
            Zipcode:zipcode,
            Description:description,
            Address:address,
            Location:location,
            Image:[image]
            

        })

        if(service.length!=0){
            res.status(200).json({
                status: "success",
                message: "successfully added service",
                data:service
        })
    }else{
        res.json('error')
    }


},
// addserviceImage:async(req,res)=>{
//     const {image}=req.body
//     const awa




// },
getService: async(req,res)=>{
    const getService= await serviceSchema.find({userId:res.token})
    if(getService.length!=0){
        res.status(200).json({
            status: "success",
            data: getService,
          });

    }else{
        res.json('error')

    }


},
deleteService:async(req,res)=>{
    const service=await serviceSchema.updateOne({})



}

}