import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "";
// const API_URL = "http://localhost:8080";

const getUserProfile = () => {
  return axios.get("/api/users/me", { headers: authHeader() });
};

const updateUserProfile = (user) => {
  return axios.patch("/api/users/me", user, {headers: authHeader()});
};

const getFriends = () => {
  return axios.get("/api/users/findUsers", { headers: authHeader() });
};

const getUserFriends = () => {
  return axios.get("/api/users/me/friends", { headers: authHeader() });
};

const addFriend = (friendId) => {
  return axios.patch("/api/users/me/addFriend", { friendId }, { headers: authHeader() });
};

const removeFriend = (friendId) => {
  return axios.patch("/api/users/me/removeFriend", { friendId }, { headers: authHeader() });
};

const getFavorite = () => {
  return axios.get("/api/users/me/favorite", { headers: authHeader() });
};

const addMovie = (movie) => {
  return axios.patch("/api/users/me/addMovie", { movie }, {headers: authHeader()});
};

const removeMovie = (movieId) => {
  return axios.patch("/api/users/me/removeMovie", { movieId }, {headers: authHeader()});
};

const UserService = {
  getUserProfile,
  updateUserProfile,
  addMovie,
  getFavorite,
  removeMovie,
  getFriends,
  getUserFriends,
  addFriend,
  removeFriend
};

export default UserService;