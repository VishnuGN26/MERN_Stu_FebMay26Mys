//Handles request related to movie 

const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deletedMovie
} = require("../controllers/movieController");

const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();
//send req to home page

router.get("/", getHome);

//sends req to get all movies

router.get("/movies", getAllMovies);

//sends req to get movie based on id 
router.get("/movies/:id", getMovieById);

//sends req to create new movie
router.post("/movies", authMiddleware, roleMiddleware("admin"), addMovie);

//sends req to update movie details
router.put("/movies/.id", authMiddleware, roleMiddleware("admin"), updateMovie);

//sends req to delete movie
router.delete("/movies/.id", authMiddleware, roleMiddleware("admin"), deleteMovie);

module.exports = router;