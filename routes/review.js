const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync.js');
const reviewController = require('../controllers/reviews.js');

const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');

//Reviews rout
router.post('/', isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//delete review rout
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;