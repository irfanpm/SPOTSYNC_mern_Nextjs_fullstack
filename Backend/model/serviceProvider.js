
const mongoose= require('mongoose')

const serviceSchema = new mongoose.Schema({
    userId:Object,
   serviceName:String,
   OwnerName:String,
   Phone:String,
   Category:String,
   Address:String,
   StreetAdrress:String,
   State:String,
   City:String,
   Zipcode:String,
   Description:String,
   Image:Array,
   Location:String

})

module.exports=mongoose.model('service',serviceSchema)