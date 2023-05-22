const {
    Router
} = require("express");

const MovieController = require("./controllers/MovieController");
const UserController = require("./controllers/UserController");
const CartController = require("./controllers/CartController");


const routes = Router();


// ---- MOVIES ------- //

routes.post("/movies", MovieController.addMovie);
routes.get("/movies", MovieController.getAllMovies);

// ---- USER ------- //

routes.post("/signup", UserController.addUser);
routes.post("/login", UserController.getUser);
routes.get("/profile/:id", UserController.getUserProfile)
routes.patch("/profile/:id", UserController.deleteMovieFromProfile);
// ---- CART ------- //

routes.get("/cart/:id", CartController.getMovie);
routes.patch("/cart/:id", CartController.addMovieToUser);

module.exports = routes;