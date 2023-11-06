const mongoose=require('mongoose')

const userReviews= new mongoose.Schema({
    userId:Object,
    serviceId:Object,
    Rating:Number,
    Comment:String
})

module.exports=mongoose.model('reviews',userReviews)