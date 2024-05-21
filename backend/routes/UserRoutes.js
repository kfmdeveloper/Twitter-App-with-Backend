const express = require("express");
const RoutesContainer = require("../controllers/UserController.js");
const Router = express.Router();
const isAuthenticated = require("../config/Auth.js");
Router.post("/register", RoutesContainer.Register);
Router.post("/login", RoutesContainer.Login);
Router.get("/logout", RoutesContainer.logout);
Router.put("/bookmarks/:id", isAuthenticated, RoutesContainer.bookmarks);
Router.get("/getprofile/:id", isAuthenticated, RoutesContainer.getProfile);
Router.get("/otherusers/:id", isAuthenticated, RoutesContainer.OtherUsers);
Router.post("/follow/:id", isAuthenticated, RoutesContainer.follow);
Router.post("/unfollow/:id", isAuthenticated, RoutesContainer.unfollow);
module.exports = {
  Router,
};
