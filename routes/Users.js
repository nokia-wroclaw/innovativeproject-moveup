const express = require("express");
const users = express.Router();
const cors = require('cors');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const User = require("../models/User");
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today,
        age: req.body.age,
        sex: req.body.sex,
        number_phone: req.body.number_phone
    };

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {

                res.status(403).json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
});


users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        },
        attributes: ['id','password']
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    //res.json(token + "           to jest id usera")
                    res.send(token)
                }
            } else {
                res.status(404).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.put('/edit', (req, res) => {
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        sex: req.body.sex,
        number_phone: req.body.number_phone
    };

    User.findOne({
        where: {
            id: req.body.id
        }
    }).then(user => {
        if (user) {
            bcrypt.hash(userData.password, 10, (err, hash) => {
                if(user.password != hash && userData.password != '' && userData.password != undefined ){
                    User.update(
                      {password: hash},
                        {where: {id: user.id}}
                    )
                } else {
                    userData.password = user.password
                }



            })
            User.update(
                {first_name: userData.first_name,
                last_name: userData.last_name,
                    age: userData.age,
                    sex: userData.sex,
                    number_phone: userData.number_phone
                },
                { where: {id: user.id}}
            )
            res.json({ status: user.email + ' edited' })
        } else {
            res.status(403).json({ error: "User already exists" })
        }
    })
        .catch(err => {
            res.send('error: ' + err)
        })
});

users.put('/get', (req, res) => {
    User.findOne({
        where: {
            id: req.body.id
        },
        attributes: ['first_name','last_name','email','age','sex','number_phone'] // TUUUTAJ OBCZAJ W CZWARTEK O CO CHODZI ?? zobacz na model event.js tam jest blad ;c
    }).then(user => {
        if (user) {
            res.send(user)
        } else {
            res.status(403).json({ error: "something wrong in get data in routers/users.js 135" })
        }
    })
        .catch(err => {
            res.send('error: ' + err  +"           140 User.js")
        })
});

module.exports = users;