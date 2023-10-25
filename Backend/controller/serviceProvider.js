const serviceSchema=require('../model/serviceProvider')
module.exports={
    addsevice :async(req,res)=>{

        const {servicename,descrption,address,image,location}=req.body
        
      const service=  await serviceSchema.create({
            userId:res.token,
            serviceName:servicename,
            Description:descrption,
            Image:image,
            Address:address,
            Location:location,
         

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


}

}