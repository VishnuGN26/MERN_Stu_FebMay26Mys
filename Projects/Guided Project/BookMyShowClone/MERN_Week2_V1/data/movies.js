// This file stores the movie data used in the CLI App
const movies = [
    {
        id:1,
        title:"Dhurandar2",
        language:"Hindi",
        genre:"Action Thriller",
        city:"Mysuru",
        cinema:"Nexus Mall-Screen 1",
        showtimes:[
            {id:1,time: "10:00 AM",seatsAvailable: 250},
            {id:2,time: "1:00 PM",seatsAvailable: 250},
            {id:3,time: "6:00 PM",seatsAvailable: 250}
        ]
    },
    {
        id:2,
        title:"LoveMocktail3",
        language:"Kannada",
        genre:"Romantic",
        city:"Mysuru",
        cinema:"DRC Mall-Screen 2",
        showtimes:[
            {id:1,time: "10:00 AM",seatsAvailable: 100},
            {id:2,time: "1:00 PM",seatsAvailable: 70},
            {id:3,time: "6:00 PM",seatsAvailable: 200}
        ]
    },
    {
        id:3,
        title:"Hayagreeva",
        language:"Kannada",
        genre:"Action",
        city:"Davangere",
        cinema:"Davangere Mall-Screen 1",
        showtimes:[
            {id:1,time: "11:00 AM",seatsAvailable: 100},
            {id:2,time: "2:00 PM",seatsAvailable: 70},
            {id:3,time: "7:00 PM",seatsAvailable: 200}
        ]
    }
];
// Export the movie data so that other files can use it.
module.exports = movies;