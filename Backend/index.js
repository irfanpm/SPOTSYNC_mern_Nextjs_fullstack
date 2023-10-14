var express =require('express')
const api = express()
const cors=require('cors')
const  mongoose  = require('mongoose')
const userRoute=require('./routes/userRoute')
api.use(express.json())

mongoose.connect('mongodb://localhost/spotsync')
api.use(cors())
api.use('/api',userRoute)
api.listen(8000,()=>{
    console.log('http://127.0.0.1:8000');
})