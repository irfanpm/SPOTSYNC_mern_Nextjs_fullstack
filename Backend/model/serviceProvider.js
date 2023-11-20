
const mongoose= require('mongoose')

const serviceSchema = new mongoose.Schema({
    userId:Object,
   serviceName:{
   type:String,

},
   Phone:String,
   Category:String,
   Address:String,
   Whatsapp:Number,
   Email:String,
   Website:String,
   Instagram:String,
   StreetAdrress:String,
   Timing:String,
   State:String,
   City:String,
   Description:String,
   Features:String,
   Image:Array,
   Location:{
    type:{type:String},
    coordinates:[]

   },
   isBlock:Boolean,
   Avgrating:Number,
   Ratingcount:Number,


})

module.exports=mongoose.model('service',serviceSchema)