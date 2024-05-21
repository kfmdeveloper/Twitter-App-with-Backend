const express = require("express");
const router = express.Router();
const Create = require("../controllers/TweetController.js");
const isAuthenticated = require("../config/Auth.js");

router.post("/create", isAuthenticated, Create.CreateTweet);
router.delete("/delete/:id", isAuthenticated, Create.DeleteTweet);
router.put("/like/:id", isAuthenticated, Create.LikeOrDisLike);
router.get("/alltweets/:id", isAuthenticated, Create.getAllTweet);
router.get("/followingtweets/:id", isAuthenticated, Create.followingTweets);
module.exports = router;
