const joi = require('joi')
const AuthUser = joi.object({
    username:joi.string().required(),
    email:joi.string().email().lowercase(),
    password:joi.string().required()


})
module.exports={
    AuthUser
}