const mongoose = require("mongoose");
const TweetSchema = mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Tweet = mongoose.model("Tweet", TweetSchema);
module.exports = Tweet;
