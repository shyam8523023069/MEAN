const Login = require('../models/Login');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
   
    var username = req.body.username
    var password = req.body.password
    Login.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        }) 
                        
                    }
                    if (result) {
                        let token = jwt.sign({ name: user.name }, 'verySecretValue', { expiresIn: '1h' })
                        res.json({
                            message: 'User Login Successfully..!',
                            token
                        })
                    }
                    else {
                        res.json({
                            message: 'Password does not Matched..!'
                        })
                    }
                })
            } else {
                res.json({
                    message: 'NO user found..!'
                })
            }
        })
    }

const register = (req, res, next) => {
   bcrypt.hash(req.body.password, 10, function (err,hashedPass){
    //    console.log("pass==========",hashedPass)
        if(err){
            res.json({
                error:err
               })
        }
        let login = new Login({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass
        })
        login.save()
        .then(user =>{
            res.json({
                message: 'Register Data added...'
            })
        })
        .catch(error =>{
            res.json({
                message:'Error Boss..'
            })
        })
    })
}

const details = (req, res, next) => {
    Login.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'Error Boss...'
        })
    })
}
module.exports = {register, details, login }