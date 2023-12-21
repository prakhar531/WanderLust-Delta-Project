const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require("../middleware.js")
const userController = require('../controllers/users.js')

//Signup routes
router.route('/signup')
    .get((req, res) => {
        res.render("./users/signup.ejs");
    })
    .post(wrapAsync(userController.signup));

//Login routes
router.route('/login')
    .get((req, res) => {
        res.render("./users/login.ejs");
    })
    .post(
        saveRedirectUrl,
        passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
        wrapAsync(userController.login)
    );


//LogOut routes
//Passport has inbuild function for logout
router.get('/logout', userController.logout);

module.exports = router;