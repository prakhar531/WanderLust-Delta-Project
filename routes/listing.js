const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, validateListing, isOwner } = require('../middleware.js');
const listingController = require('../controllers/listings.js');
const multer = require('multer')
const { storage } = require('../cloudConfig.js')
const upload = multer({ storage })


router.
    route("/")
    .get(wrapAsync(listingController.index))  //Index route
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing));  //create route



//new route:Create operation, it is kept above id because id will new as id
router.get('/new', isLoggedIn, wrapAsync(listingController.renderNewForm));

router.route("/:id")
    .get(wrapAsync(listingController.showListing)) //Show route
    .put(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        isOwner,
        wrapAsync(listingController.updateListing)) //update route
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.deleteListing)); //delete rout


//Edit route
router.get('/:id/edit',
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));

module.exports = router;