const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json')

const User = require('../models/user');

const router = express.Router('');

functiongenerateToken(params = {});{
    return jwt.sign(params, authConfig.secret, {
        experesIn:86400, 
    } )
}


router.post('/register', async (req, red) => {
    const { email } = req.body
try {

    if(await User.findOne({email}))
    return res.status(400).send({error: 'User already exists'});
    
    const user = await User.create(req.body);

    user.password = underfind;

    return res.send({
        user,
        token: generateToken({id: user.id}),
    }); 
} catch (err){
    return res.status(400).send({error: 'Registration failed'});
}
});

router.post('/authenticate', async (req, res)=>{
    const {email, password} = req.body;

    const user =await User.findOne({ email }).select('+password');
    if(!user)
    return res.status(400).send({error: 'User not found'});

    if(!await bcrypt.compare(password, user.password))
    return res.status(400). send({error:'invalid password'});


    

    user.password = undefined;

  
    } )
    res.send
    ({user,
    token: generateToken({id: user.id}),
});





module.express = app=>app.use('/auth', router);