const User = require("../models/UserSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//create register User
const Register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    console.log(username);
    if (!name || !username || !email || !password) {
      return res.status(401).json({
        message: "Please fill Up all the fields!",
        success: false,
      });
    }
    if (name.length < 3) {
      return res.status(401).json({
        message: "Please provide name at least 4 characters",
        success: false,
      });
    }
    if (password.length < 8) {
      return res.status(401).json({
        message: "Please provide password at least 8 characters",
        success: false,
      });
    }
    if (email.length < 13) {
      return res.status(401).json({
        message: "Please provide a Valid email Address!",
        success: false,
      });
    }
    if (username.length < 5) {
      return res.status(401).json({
        message: `${username} is too short!`,
        success: false,
      });
    }
    const userbyemail = await User.findOne({ email });
    const userbyusername = await User.findOne({ username });

    if (userbyemail) {
      return res.status(401).json({
        message: "Sorry, User already exists ❗️",
        success: false,
      });
    }
    if (userbyusername) {
      return res.status(401).json({
        message: "Invalid username ❗️",
        success: false,
      });
    }

    const token = await jwt.sign(email, process.env.JSON_TOKEN);
    res.cookie("token", token, {
      secure: true,
      httpOnly: true,
      expiresIn: "1d",
    });
    const hashedPassword = await bcrypt.hash(password, 12);
    const CreatedUser = await new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await CreatedUser.save();
    return res.status(200).json({
      message: " Account created Successfully",
      success: true,
      created: true,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      message: "Cannot register user ❗️",
      success: false,
    });
  }
};

//login

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: " Please fill up all the fields ❗️",
        success: false,
      });
    }
    if (email.length < 13) {
      return res.status(401).json({
        message: " Please provide a valid email ❗️",
        success: false,
      });
    }
    if (password.length < 8) {
      return res.status(401).json({
        message: " Password cannot be less than 8 characters ❗️",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: " Incorrect email or password ❗️",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: " Incorrect email or password ❗️",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.JSON_TOKEN, {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .cookie("token", token, {
        expiresIn: "1d",
        httpOnly: true,
        secure: true,
      })
      .json({
        message: ` ${user.name} Welcome back ❤️`,
        user,
        success: true,
      });
  } catch (error) {
    return res.status(500).json({
      message: "User login problems ❗️",
      success: false,
    });
  }
};
const logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "User logout Successfully ❗️",
    success: true,
  });
};
const bookmarks = async (req, res) => {
  try {
    const LoggedUserId = req.body.id;
    const tweetId = req.params;
    const user = await User.findById(LoggedUserId);
    if (user.bookmarks.includes(tweetId)) {
      await User.findByIdAndUpdate(LoggedUserId, {
        $pull: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Removed from bookmarks!",
        success: true,
      });
    } else {
      await User.findByIdAndUpdate(LoggedUserId, {
        $push: { bookmarks: tweetId },
      });
      return res.status(200).json({
        message: "Saved in bookmarks!",
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Tweet Bookmarks Problem!",
      success: false,
      error: error.message,
    });
  }
};
const getProfile = async (req, res) => {
  try {
    const LoggedId = req.params.id;
    const user = await User.findById(LoggedId).select("-password");
    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Cann't get Profile!",
      success: false,
      error: error.message,
    });
  }
};
const OtherUsers = async (req, res) => {
  try {
    const LoggedId = req.params.id;
    const OtherUsers = await User.find({ _id: { $ne: LoggedId } }).select(
      "-password"
    );
    if (!OtherUsers) {
      return res.status(201).json({
        message: "NO users yet!",
        success: false,
      });
    }
    return res.status(201).json({
      OtherUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Cann't get OtherUsers!",
      success: false,
      error: error.message,
    });
  }
};

const follow = async (req, res) => {
  try {
    const LoggedUserId = req.body.id;
    const userId = req.params.id;
    const loggedUser = await User.findById(LoggedUserId); // User1
    const user = await User.findById(userId); // User2
    if (!user.followers.includes(LoggedUserId)) {
      await user.updateOne({ $push: { followers: LoggedUserId } });
      await loggedUser.updateOne({ $push: { following: userId } });
    } else {
      return res.status(201).json({
        message: `${loggedUser.name} already followed to ${user.name}`,
      });
    }
    return res.status(200).json({
      message: `${loggedUser.name} just follow to ${user.name}`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "User follow problems!",
      success: false,
      error: error.message,
    });
  }
};

const unfollow = async (req, res) => {
  try {
    const loggeduserId = req.body.id;
    const userid = req.params.id;
    const foundloggeduser = await User.findById(loggeduserId); //loggedUser
    const paramUser = await User.findById(userid); // user that's you  want to unfollow
    if (paramUser.followers.includes(loggeduserId)) {
      await paramUser.updateOne({ $pull: { followers: loggeduserId } });
      await foundloggeduser.updateOne({ $pull: { following: userid } });
    } else {
      return res.status(201).json({
        message: `You haven't any followers yet!`,
      });
    }
    return res.status(200).json({
      message: `${foundloggeduser.name} just unfollow the ${paramUser.name}`,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "User Unfollow problems!",
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  Register,
  OtherUsers,
  Login,
  logout,
  bookmarks,
  getProfile,
  follow,
  unfollow,
};
