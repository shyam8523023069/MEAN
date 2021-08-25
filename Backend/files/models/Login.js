const mongoose = require('mongoose');
const Schema = mongoose.Schema

const loginSchema = new Schema({
    name : {
        type:String
    },
    email : {
        type: String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
},{timestamps:true})

const Login = mongoose.model('Login', loginSchema)
module.exports= Login