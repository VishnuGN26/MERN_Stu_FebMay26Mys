//functions for movie handling are created 
const movies = require("../data/movies");
const CustomError = require("../utils/customError");

function getHome(req,res){
    res.status(200).json({
        success:true,
        message:"Welcome to BookMyShow Express backend"

    });
}

function getAllMovies(req,res){
    const {language,genre,city} = req.query;
    let filteredMovies = movies;

    if(language){
        filteredMovies = filteredMovies.filter((movie)=>movie.language.toLowerCase()===language.toLowerCase());

        }
        
    if(genre){
        filteredMovies = filteredMovies.filter((movie)=>movie.genre.toLowerCase()===genre.toLowerCase());

        }
        
    if(city){
        filteredMovies = filteredMovies.filter((movie)=>movie.city.toLowerCase()===city.toLowerCase());

        }
        res.status(200).json({
            success:true,
            count:filteredMovies.length,
            data: filteredMovies
        });
    }

    function getMovieById(req,res,next){

    }
