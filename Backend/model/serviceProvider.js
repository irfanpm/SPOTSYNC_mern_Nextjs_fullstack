
const mongoose= require('mongoose')

const serviceSchema = new mongoose.Schema({
    userId:Object,
   serviceName:String,
   Address:String,
   Description:String,
   Image:[],
   Location:String

})

module.exports=mongoose.model('service',serviceSchema)