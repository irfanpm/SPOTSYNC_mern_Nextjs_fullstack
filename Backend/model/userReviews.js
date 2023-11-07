const mongoose=require('mongoose')

const userReviews= new mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId,ref:"user"},
    serviceId:Object,
    Rating:Number,
    Title:String,
    Comment:String
})

module.exports=mongoose.model('reviews',userReviews)