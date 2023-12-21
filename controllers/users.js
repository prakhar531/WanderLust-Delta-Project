const User = require('../models/user.js');

module.exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect('/signup');
    }
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome back to WanderLust");
    //when we will try to login form "/listings" then isLoggedIn middleware will never be called and req.session.redirectUrl will remain uninitilized ie null.
    let redirectUrl = res.locals.redirectUrl || "/listings";

    if (redirectUrl.includes("DELETE")) {
        redirectUrl = "/listings";
    }

    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", " You are logged out now");
        res.redirect("/listings");
    });
}