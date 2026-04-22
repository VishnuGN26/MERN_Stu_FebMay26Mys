const express = require("express");

const router = express.Router();
const movieController = require("../controllers/movie.controller")

const{protect} = require("../middleware/auth.middleware");
const{authorize} = require("../middleware/role.middleware");

//Public router
router.get("/",movieController.getMovies);
//Admin only route
router.post("/",protect,authorize("admin"),movieController.createMovie);
router.put("/:id",protect,authorize("admin"),movieController.updateMovie);
router.delete("/:id",protect,authorize("admin"),movieController.deleteMovie);

module.exports = router;