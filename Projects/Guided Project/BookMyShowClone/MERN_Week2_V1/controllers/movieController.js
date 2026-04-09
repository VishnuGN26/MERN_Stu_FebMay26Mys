//functions for movie handling are created 
const movies = require("../data/movies");
const CustomError = require("../utils/customError");

function getHome(req, res) {
    res.status(200).json({
        success: true,
        message: "Welcome to BookMyShow Express backend"

    });
}

function getAllMovies(req, res) {
    const { language, genre, city } = req.query;
    let filteredMovies = movies;

    if (language) {
        filteredMovies = filteredMovies.filter((movie) => movie.language.toLowerCase() === language.toLowerCase());

    }

    if (genre) {
        filteredMovies = filteredMovies.filter((movie) => movie.genre.toLowerCase() === genre.toLowerCase());

    }

    if (city) {
        filteredMovies = filteredMovies.filter((movie) => movie.city.toLowerCase() === city.toLowerCase());

    }
    res.status(200).json({
        success: true,
        count: filteredMovies.length,
        data: filteredMovies
    });
}

function getMovieById(req,res,next){
    const movieId = Number(req.params.id);
    const movie = movies.find((m)=>m.id === movieId);

    if (!movie) {
        return next(new CustomError("Movie not found",404));
    }
    res.status(200).json({
        success:true,
        data: movie
    });
}

function getMovieById(req,res,next){
    const movieId = Number(req.params.id);
    const movie = movies.find((m)=>m.id === movieId);

    if (!movie) {
        return next(new CustomError("Movie not found",404));
    }
    res.status(200).json({
        success:true,
        data: movie
    });
}

function addMovie(req,res,next){
    const {title,language,genre,city,cinema,showtimes} = req.body;

    if(!title||!language||!genre||!city||!cinema||!showtimes){
        return next(new CustomError("title,language,genre,city,cinema,showtimes are required",404));
    }

    const newMovie = {
        id:movies.length+1,
        title,
        language,
        genre,
        city,
        cinema,
        showtimes:showtimes||[]
    };
    movies.push(newMovie);
    res.status(201).json({
        success:true,
        message:"Movie added Successfully",
        data: newMovie
    });
}

function updateMovie(req,res,next){
    const movieId = Number(req.params.id);
    const movie = movies.find((m)=>m.id === movieId);

    if (!movie) {
        return next(new CustomError("Movie not found",404));
    }

    const {title,language,genre,city,cinema,showtimes} = req.body;
    if(title) movie.title = title;
    if(language) movie.language = language;
    if(genre) movie.genre = genre;
    if(city) movie.city = city;
    if(cinema) movie.cinema = cinema;
    if(showtimes) movie.showtimes = showtimes;

    res.status(200).json({
        success:true,
        message:"Movie updated Successfully",
        data: movie
    });
}

function deleteMovie(req,res,next){
    const movieId = Number(req.params.id);
    const movieIndex = movies.findIndex((m)=>m.id === movieId);

    if (movieIndex === -1) {
        return next(new CustomError("Movie not found",404));
    }

    const deletedMovie = movies.splice(movieIndex,1);    

    res.status(200).json({
        success:true,
        message:"Movie deleted Successfully",
        data: deletedMovie[0]
    });
}

module.exports = {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
};