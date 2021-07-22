const path = require('path')
const express = require('express')
require('./db/mongoose')
const passport = require('passport');
const { Strategy } = require('passport-facebook');
const { FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET, SESSION_SECRET } =  process.env;
const userRouter = require('./routers/user')
const shopRouter = require('./routers/shop')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(shopRouter) 

app.use(require('express-session')({ secret: SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {
    console.log('Server is up on ' + port)
})


