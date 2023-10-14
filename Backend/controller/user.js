const userSchema = require("../model/user");
const bcrypt = require("bcrypt");
const { AuthUser } = require("../model/validateSchema");
const jwt = require('jsonwebtoken')
require("dotenv").config();

module.exports = {
    //user Register
  Register: async (req, res) => {
    const { error, value } = await AuthUser.validate(req.body);
    const { username, email, password } = value;
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
      const user = await userSchema.find({
        Username: username,
      });
      if (user) {
        bcrypt.compare(password, user[0].Password, (err, result) => {
          if (result) {
            let resp = {
              id: user[0].id,
            };
            let token = jwt.sign(resp, process.env.ACESS_TOKEN_SECRET, {
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
            res.json({ err: "failure" });
          }
        });
      } else {
        res.json("this user not available");
      }
    }
  },













};
