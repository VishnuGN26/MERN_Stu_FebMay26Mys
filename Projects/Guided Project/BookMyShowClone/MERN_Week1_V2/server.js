// server.js | create server and serve the requests
const http = require("http"); 
const url = require("url"); 
const movies = require("./movies"); 
const { readBookingsAsync, appendBookingAsync, appendLogAsync } = require("./fileManager"); 

const PORT = 3000; 

function sendJson(res, statusCode, payload) { 
  res.writeHead(statusCode, { "Content-Type": "application/json" }); 
  res.end(JSON.stringify(payload, null, 2)); 
} 

function parseRequestBody(req) { 
  return new Promise((resolve, reject) => { 
    const chunks = []; 

    req.on("data", (chunk) => { 
      // chunk is already a Buffer 
      chunks.push(chunk); 
    }); 

    req.on("end", () => { 
      try { 
        const buffer = Buffer.concat(chunks); 
        const bodyString = buffer.toString("utf8"); 
        const parsed = bodyString ? JSON.parse(bodyString) : {}; 
        resolve(parsed); 
      } catch (error) { 
        reject(error); 
      } 
    }); 

    req.on("error", (error) => { 
      reject(error); 
    }); 
  }); 
} 

const server = http.createServer(async (req, res) => { 
  const parsedUrl = url.parse(req.url, true); 
  const pathName = parsedUrl.pathname; 
  const method = req.method; 

  try { 
    // GET /movies 
    if (method === "GET" && pathName === "/movies") { 
      const movieId = parsedUrl.query.id; 
      const title = parsedUrl.query.title; 

      let result = movies; 

      if (movieId) { 
        result = result.filter((movie) => movie.id === Number(movieId)); 
      } 

      if (title) { 
        result = result.filter((movie) => 
          movie.title.toLowerCase().includes(title.toLowerCase()) 
        ); 
      } 

      return sendJson(res, 200, { 
        success: true, 
        message: "Movies fetched successfully.", 
        data: result 
      }); 
    } 

    // GET /booking 
    if (method === "GET" && pathName === "/booking") { 
      const bookings = await readBookingsAsync(); 
      return sendJson(res, 200, { 
        success: true, 
        message: "Bookings fetched successfully.", 
        data: bookings 
      }); 
    } 

    // POST /booking 
    if (method === "POST" && pathName === "/booking") { 
      const body = await parseRequestBody(req); 

      const { movieId, movieTitle, time, seatCount } = body; 

      if (!movieId || !movieTitle || !time || !seatCount) { 
        return sendJson(res, 400, { 
          success: false, 
          message: "movieId, movieTitle, time, and seatCount are required." 
        }); 
      } 

      const booking = { 
        bookingId: `API-BOOK-${Date.now()}`, 
        movieId, 
        movieTitle, 
        time, 
        seatCount 
      }; 

      await appendBookingAsync(booking); 
      await appendLogAsync(`Booking saved through API: ${booking.bookingId}`); 

      return sendJson(res, 201, { 
        success: true, 
        message: "Booking created successfully through API.", 
        data: booking 
      }); 
    } 

    // Unsupported route 
    return sendJson(res, 404, { 
      success: false, 
      message: "Route not found." 
    }); 
  } catch (error) { 
    return sendJson(res, 500, { 
      success: false, 
      message: "Internal server error.", 
      error: error.message 
    }); 
  } 
}); 

function startServer() { 
  server.listen(PORT, () => { 
    console.log(`HTTP server is running at http://localhost:${PORT}`); 
  }); 
} 

if (require.main === module) { 
  startServer(); 
} 

module.exports = { 
  startServer 
}; 