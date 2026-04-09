//Express app configuration file
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const loggerMiddleware = require("./middleware/loggerMiddleware");
const errorMiddleware = require("./middleware/errorMiddleware");

const movieRoutes = require("./routes/movieRoutes");
const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(
    session({
        secret:"secretKeysshhhdonttellanyone",
        resave:false,
        saveUnitialized:false,
        cookie:{

            secure:false,
            httpOnly:true
        }
    })
);

app.use(loggerMiddleware);
app.use("/",movieRoutes);
app.use("/auth",authRoutes);
app.use("/",bookingRoutes);
app.use("/users",userRoutes);

app.use(errorMiddleware);
module.exports = app;



