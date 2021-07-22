'use strict';
const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const fbOuth = require('../middleware/fbOuth')
const passport = require('passport');
const router = new express.Router() 



router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        sendWelcomeEmail(user.email, user.name)
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    } 
})

router.post('/users/login', async (req, res)=>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
    } catch (e) {
        res.status(400).send()
    }
})

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })

        await req.user.save()
        res.send()

    } catch (e) {
        res.status(500).send()        
    }
})

router.get('/users/me', auth, async (req, res)=>{
    res.send(req.user)
})

router.get('/', (req, res, next) => {
    const { user } = req;
    res.render('home', { user });
});

router.get('/login/facebook', passport.authenticate('facebook'));

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

router.get('/return', 
  passport.authenticate('facebook', { failureRedirect: '/' }),
  (req, res, next) => {
    res.redirect('/');
});



module.exports = router













module.exports = router