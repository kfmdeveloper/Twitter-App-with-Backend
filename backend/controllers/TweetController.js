const Tweet = require("../models/TweetSchema.js");
const User = require("../models/UserSchema.js");
const CreateTweet = async (req, res) => {
  const { description, id } = req.body;
  try {
    if (!description || !id) {
      return res.status(401).json({
        message: "Fields are required!",
        success: false,
      });
    }
    const tweet = await new Tweet({
      description,
      userId: id,
    });
    await tweet.save();
    console.log("Tweet Created Successfully!");
    return res.status(200).json({
      message: "Tweet Created Successfully!",
      success: true,
    });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Tweet Creation Problems!",
        success: false,
      })
      .send(error);
  }
};
const DeleteTweet = async (req, res) => {
  try {
    const { id } = req.params;
    await Tweet.findByIdAndDelete(id); // Use the Tweet model to perform the
    return res.status(200).json({
      message: "Tweet Deleted Successfully!",
      success: true,
    });
  } catch (error) {
    console.error("Tweet Deletion Problem:", error);
    return res.status(500).json({
      message: "Tweet Deletion Problem!",
      success: false,
      error: error.message, // Optionally, send back the error message in the response
    });
  }
};

const LikeOrDisLike = async (req, res) => {
  try {
    const loggedUserId = req.body.id;
    const tweetid = req.params.id;
    const loggedUser = await User.findById(loggedUserId); //user
    const tweet = await findById(tweetid); //tweet
    if (!tweet) {
      return res.status(401).json({
        message: "you haven't tweets yet!",
      });
    }
    if (tweet.likes.includes(loggedUserId)) {
      await Tweet.findByIdAndUpdate(tweetid, { pull: { likes: loggedUserId } });
      return res.status(201).json({
        message: `${loggedUser.username} unlike the tweet!`,
      });
    } else {
      await Tweet.findByIdAndUpdate(tweetid, { push: { likes: loggedUserId } });
    }
    return res.status(200).json({
      message: `${loggedUser.username} like the tweet!`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Tweet likes or dislilke error!",
      success: false,
      error: error.message,
    });
  }
};
const getAllTweet = async (req, res) => {
  try {
    const id = req.params.id;

    const LoggedUser = await User.findById(id); //user
    const loggedUserTweets = await Tweet.find({ userId: id }); //user tweets
    const followingUsertweets = await Promise.all(
      LoggedUser.following.map((otheruserid) => {
        return Tweet.find({ userId: otheruserid });
      })
    );

    return res.status(201).json({
      tweets: loggedUserTweets.concat(...followingUsertweets),
    });
  } catch (error) {
    return res.status(500).json({
      message: "Tweet finding error!",
      success: false,
      error: error.message,
    });
  }
};
const followingTweets = async (req, res) => {
  try {
    const logedId = req.params.id;
    const loggedUser = await User.findById(logedId);
    const followingtweet = await Promise.all(
      loggedUser.following.map((ids) => {
        return Tweet.find({ userId: ids });
      })
    );
    if (!followingtweet) {
      return res.status(201).json({
        message: "not tweets yet!",
      });
    }
    return res.status(200).json({
      Tweets: [].concat(...followingtweet),
    });
  } catch (error) {
    return res.status(500).json({
      message: "following Tweets error!",
      success: false,
      error: error.message,
    });
  }
};
//exporting all modules or functions
module.exports = {
  CreateTweet,
  DeleteTweet,
  LikeOrDisLike,
  getAllTweet,
  followingTweets,
};
