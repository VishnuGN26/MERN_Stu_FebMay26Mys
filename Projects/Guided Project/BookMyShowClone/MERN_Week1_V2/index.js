//Main file from where the project begins
const readline = require("readline");
const chalk = require("chalk");

const movies = require("./movies");
// console.log(movies);
const bookingEmitter = require("./events");
const {
    validateMovieSelection,
    validateTimeSelection,
    validateSeatCount
} = require("./validator");
const {
    getCurrentBooking,
    processBookingAsync
} = require("./booking");
const {
    cancelBooking
} = require("./cancel");

const MAX_ATTEMPTS = 3;
let invalidAttempts = 0;

const rl = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

//Event Listeners
bookingEmitter.on("bookingStarted",()=>{
    console.log(chalk.blue("Booking process started."));
});

bookingEmitter.on("bookingValidated",()=>{
    console.log(chalk.cyan("Booking validated successfully."));
});

bookingEmitter.on("bookingConfirmed",(booking)=>{
    console.log(chalk.green("\nBooking Confirmed."));
    console.log(chalk.green(`Booking Id: ${booking.bookingId}`));
});

bookingEmitter.on("bookingCancelled",(booking)=>{
    console.log(chalk.yellow(`Booking Cancelled for Id: ${booking.movieTitle} at ${booking.time}`));
});

bookingEmitter.on("bookingFailed",(error)=>{
    console.log(chalk.red(`Booking failed: ${error}`));
});

//Helper functions
function displayMovies(){
    console.log(chalk.magenta("\nAvailable Movies"));

    movies.forEach((movie)=>{
        console.log(chalk.bold(`\n${movie.id}.${movie.title}`));
        movie.showtimes.forEach((show)=>{
            console.log(`-${show.time} | Seats Available: ${show.seatsAvailable}`,);
        });
    });
}

function handleInvalidAttempt(message){
    invalidAttempts++;
    console.log(chalk.red(`\n${message}`));
    console.log(chalk.yellow(`Attempts left:${MAX_ATTEMPTS-invalidAttempts}`));

    if(invalidAttempts>=MAX_ATTEMPTS){
        console.log(chalk.red("\nMax invalid attempts reached. Exiting app."));
        rl.close();
        return true;
    }
    return false;
}

function viewCurrentBooking(){
    const booking = getCurrentBooking();
    if(!booking){
        console.log(chalk.yellow("\n No Booking found."));
        return;
    }
    console.log(chalk.green("Booking details"));
    console.log(`Booking id: ${booking.bookingId}`);
    console.log(`Movie: ${booking.movieTitle}`);
    console.log(`Time: ${booking.time}`);
    console.log(`Seats: ${booking.seatCount}`);
}

function showMenu(){
    console.log(chalk.blue("Movie Ticket Booking System"));
    console.log("1.View Movies |2.Book Tickets |3.View Booking");
    console.log("4.Cancel Booking |5.Re-Book Tickets |6.Exit");
    rl.question("\nEnter your choice:",handleMenuChoice);
}
function handleMenuChoice(choice){
    switch (choice.trim()) {
        case "1":displayMovies(); showMenu(); break;
        case "2":startBookingFlow(); break;
        case "3":viewCurrentBooking(); showMenu(); break;
        case "4":cancelBooking(movies); showMenu(); break;
        case "5": if (!getCurrentBooking()) {
            console.log(chalk.yellow("No booking available."));
            showMenu();
        }else{
            cancelBooking(movies);
            startBookingFlow();
        }
        break;
        case "6":
            console.log(chalk.green("Thank you Bye bye"));
            rl.close(); break;
        default:
            if (!handleInvalidAttempt("Invalid menu choice.")) {
                showMenu();
            }
            break;
    }
}

function startBookingFlow(){
    displayMovies();
    rl.question("\nEnter movieId: ",(movieIdInput)=>{
        const movieId = Number(movieIdInput);

        validateMovieSelection(movies,movieId,
            (movieError,selectedMovie)=>{
                if (movieError) {
                    if (!handleInvalidAttempt(movieError)) {
                        startBookingFlow();
                    }
                    return;
                }
                rl.question("Enter time slot as displayed:",(timeInput)=>{
                    validateTimeSelection(selectedMovie,timeInput,
                        (timeError,selectedShowtime)=>{
                            if (timeError) {
                                if (!handleInvalidAttempt(timeError)) {
                                    startBookingFlow();
                                }
                                return;
                            }

                            rl.question("Enter no. of seats: ",
                                async(seatInput)=>{
                                    const seatCount = Number(seatInput);
                                    validateSeatCount(seatCount,
                                        async (seatError,validSeatCount)=>{
                                            if (seatError) {
                                                if (!handleInvalidAttempt(seatError)) {
                                                    startBookingFlow();
                                                }
                                                return;
                                            }
                                            try{
                                                const booking = await processBookingAsync(
                                                    selectedMovie,
                                                    selectedShowtime,
                                                    validSeatCount,
                                                );
                                                console.log(chalk.green("Booking Details"));
                                                console.log(`Booking id: ${booking.bookingId}`);
                                                console.log(`Movie: ${booking.movieTitle}`);
                                                console.log(`Time: ${booking.time}`);
                                                console.log(`Seats: ${booking.seatCount}`);
                                                invalidAttempts = 0;
                                                showMenu();
                                            }
                                            catch(error){
                                                if (!handleInvalidAttempt(error)) {
                                                    showMenu();
                                                }
                                            }
                                        }
                                    )
                                })
                    })
                })
        })
    })
}
showMenu();