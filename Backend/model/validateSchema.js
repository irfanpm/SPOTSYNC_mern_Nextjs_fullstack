const joi = require('joi')
const AuthUser = joi.object({
    username:joi.string().required(),
    email:joi.string().email().lowercase(),
    mobilenumber:joi.number(),
    password:joi.string().required(),
    type:joi.string()



})
module.exports={
    AuthUser
}