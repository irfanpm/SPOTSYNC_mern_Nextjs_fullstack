const userSchema = require("../model/user");
const bcrypt = require("bcrypt");
const { AuthUser } = require("../model/validateSchema");
const jwt = require('jsonwebtoken')
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

  }














};
