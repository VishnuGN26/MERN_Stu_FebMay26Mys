// Callback based validation functions

function validateMovieSelection(movies,movieId,callback) {
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if (!selectedMovie) {
        return callback("Invalid movie selection.Choose a valid movie ID.",null);
    }
    callback(null,selectedMovie);

}

function validateTimeSelection(movie, selectedTime, callback) {
  const selectedShowtime = movie.showtimes.find(
    (show) => show.time.toLowerCase() === selectedTime.toLowerCase()
  );

  if (!selectedShowtime) {
    return callback("Invalid time slot selection. Please choose a valid show time.", null);
  }

  callback(null, selectedShowtime);
}


function validateSeatCount(seatCount,callback) {
    if (isNaN(seatCount) || seatCount <= 0) {
        return callback("Invalid seat count.Enter a valid seat count.",null);
    }
    callback(null,seatCount);
}

module.exports = {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
};