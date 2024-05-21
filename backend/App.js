const express = require("express");
const app = express();
require("dotenv").config();
require("./database/UserDatabase").dbConnection();
const Routes = require("./routes/UserRoutes");
const cookieParser = require("cookie-parser");
const Tweet = require("./routes/TweetRoute.js");
const cors = require("cors");
const isAuthenticated = require("./config/Auth.js");
// mongodb+srv://KhalidFarooq:oZHDiBfYRvKZEybb@cluster0.4vqpfqb.mongodb.net/TwitterClone
//midlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));
//base URL

app.use("/api/v1/user", Routes.Router);
app.use("/api/v1/tweet", Tweet);
app.get("/", isAuthenticated, (req, res) => {
  res.send("Working");
});
//PORT
app.listen(process.env.PORT, () => {
  console.log(
    `server is running at the port https://localhost:${process.env.PORT}`
  );
});
