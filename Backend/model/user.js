const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    Username:String,
    MobileNumber:Number,
    Email:String,
    Password:String,
    avatar:String,
    Type:String

})

module.exports=mongoose.model('user',userSchema)