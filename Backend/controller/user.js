const userSchema = require("../model/user");
const serviceSchema=require("../model/serviceProvider")
const userReviews=require('../model/userReviews')
const bcrypt = require("bcrypt");
const { AuthUser } = require("../model/validateSchema");
const jwt = require('jsonwebtoken')
const favourite = require("../model/favourite");
require("dotenv").config();

module.exports = {
    //user Register
  Register: async (req, res) => {
    const { error, value } = await AuthUser.validate(req.body);
    const { username, email, password  } = value;
    if (error) {
      res.status(422).json({
        status: "error",
        message: error.details[0].message,
      });
    } else {
      bcrypt.hash(password, 10, async function (err, hash) {
        await userSchema.create({
          Username: username,
          Email: email,
          isBlock:false,
          Password: hash,

        });
      });
      res.status(200).json({
        status: "success",
        message: "successfully register",
      });
    }
  },
  

//Login page

  Login: async (req, res) => {
    const { error, value } = await AuthUser.validate(req.body);
    const { username, password } = value;
    if (error) {
      res.status(422).json({
        status: "error",
        message: error.details[0].message,
      });
    } else {
      const user = await userSchema.findOne({
        Username: username,
      });
      if (user) {
        bcrypt.compare(password, user.Password, (err, result) => {
          if (result) {
            let resp = {
              id: user.id,
            };
            let token = jwt.sign({id:resp.id}, process.env.ACESS_TOKEN_SECRET, {
              expiresIn: 86400,
            });
            if (token) {
              res.status(200).json({
                status: "success",
                message: "successfully login ",
                auth: true,
                token: token,
              });
            }
          } else {

            res.json({
              status:'error',
               message: "failure" 
              });
          }
        });
      } else {
        res.json({message:"this user not available"});
      }
    }
  },
  Profile:async(req,res)=>{
   const userProfile= await userSchema.find({_id:res.token})
   if(userProfile){
    res.status(200).json({
      status: "success",
      data: userProfile,
    });
   }else{
    res.json("error") 
   }

  },
  editavatar:async(req,res)=>{
    const {avatar}=req.body
    const user =await userSchema.findOne({_id:res.token})
    if(user){
      const avatars=await userSchema.findByIdAndUpdate(res.token,{$set:{
        avatar:avatar
      }})
      res.json('add successfully')
    }else{
      res.json("failed")
    }

  },
  getService: async(req,res)=>{
    const {category}=req.body
    const getService= await serviceSchema.find({Category:category})
    if(getService.length!=0){
        res.status(200).json({
            status: "success",
            data: getService,
          });

    }else{
        res.json('error')

    }


},
  findService:async(req,res)=>{
    const { serviceid }=req.body
    const service=await serviceSchema.find({_id:serviceid})
    if(service){
        res.status(200).json({
            status: "success",
            data: service,
          });

    }else{
        res.json("service not available")
    }


},

review: async(req,res)=>{
const {serviceid,rating,title,comment}=req.body
await userReviews.create({
  userId:res.token,
  serviceId:serviceid,
  Rating:rating,
  Comment:comment,
  Title:title,

})
res.status(200).json({
  status: "success",
  message: "successfully added review",
});


},

displayreview:async(req,res)=>{
  const {serviceid}=req.body
  const  reviews =await userReviews.find({serviceId:serviceid}).populate('userId')
  if(reviews){
      res.status(200).json({
        status: "success",
        message: "successfully added review",
         data:reviews
      });  
  }else{
    res.json({message:"user not available"})
  }
},
ratingAverage:async(req,res)=>{
  const {serviceid}=req.body
  const ratingservice= await userReviews.find({serviceid})
  if(ratingservice){
  const avgRating= await userReviews.aggregate([
    {
      $match:{serviceId:serviceid}
    },

    {
    $group : {
      _id:null,
      totalRating:{$avg:"$Rating"}
    }



    }
  ])
  res.json({
    status: "success",
    message: "Successfully fetched stats.",
    data: avgRating[0]?.totalRating
  });


 
}
},
favourite:async(req,res)=>{
  const {serviceid}=req.body
  const service=await favourite.find({serviceId:serviceid})
  if(service.length==0){
  const fav=await favourite.create({
    userId:res.token,
    serviceId:serviceid,
    serviceID:serviceid
  })
  res.json(fav)
}else{
  const unfav=await favourite.deleteOne({serviceId:serviceid})
  res.json(unfav)
}


},
showfavourite : async(req,res)=>{
  const fav=await favourite.find()
  if(fav){
    res.json(fav)
  }

},
showuserfavourite:async(req,res)=>{
 const fav=await favourite.find({userId:res.token}).populate('serviceId')
 if(fav){
  res.status(200).json({
    status: "success",
    message: "successfully fetched favourite service",
     data:fav
  });  

 }else{
  res.json('favourite not available')
 }

}















};
