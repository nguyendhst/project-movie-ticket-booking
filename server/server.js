const db = require("mysql2");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())
app.use(express.json({extended: false}));
// import .env.local
dotenv.config({
    path: `${__dirname}/../.env.local`,
});

// connection string
// mysql://<USERNAME>:<PLAIN_TEXT_PASSWORD>@<ACCESS_HOST_URL>/<DATABASE_NAME>?ssl={"rejectUnauthorized":true}
console.log(
    "login info",
    process.env.DB_USER,
    process.env.DB_PASS,
    process.env.DB_HOST,
    process.env.DB_NAME
);

// Initialize the database
// SSL/TLS required
const connection = db.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    ssl: {},
});

try {
    connection.connect();
} catch (e) {
    console.log(e);
}

// tables in the database
// `movies` --  (id, title, adult, poster_path, vertical_poster_path, overview, genre_ids, language, release_date, status)
// `genres` -- (id, name)
// `timeslots` -- (movie_id, start_time, duration, price, empty_seats)

const queryGetAllMovies = (dbname) => {
    return `SELECT * FROM \`${dbname}\`.\`movies\`;`;
};

const queryGetMovieById = (dbname, id) => {
    return `SELECT * FROM \`${dbname}\`.\`movies\` WHERE id = ${id};`;
};

const queryGetMoviesByStatus = (dbname, status) => {
    // ongoing -> Ongoing
    // trending -> Trending
    let statusCapitalized = status.charAt(0).toUpperCase() + status.slice(1);
    return `SELECT * FROM \`${dbname}\`.\`movies\` WHERE status = \'${statusCapitalized}\';`;
};

// Create a route
app.get("/", async (req, res) => {
    try {
        connection.query(
            queryGetAllMovies(process.env.DB_NAME),
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                    res.send({ error: err });
                } else {
                    console.log(results);
                    res.send({ results });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
});

// GET /api/movies?all=true
app.get("/api/movies", async (req, res) => {
    const { all, status, genre, language, sort, order, limit, offset } =
        req.query;
    if (all) {
        try {
            connection.query(
                queryGetAllMovies(process.env.DB_NAME),
                function (err, results, fields) {
                    if (err) {
                        console.log(err);
                        res.send({ error: err });
                    } else {
                        console.log(results);
                        res.send({ results });
                    }
                }
            );
        } catch (e) {
            console.log(e);
            res.send({ error: e });
        }
    } else {
        if (status) {
            try {
                connection.query(
                    queryGetMoviesByStatus(process.env.DB_NAME, status),
                    function (err, results, fields) {
                        if (err) {
                            console.log(err);
                            res.send({ error: err });
                        } else {
                            console.log(results);
                            res.send({ results });
                        }
                    }
                );
            } catch (e) {
                console.log(e);
                res.send({ error: e });
            }
        }
    }
});

// GET /api/movies/:id
app.get("/api/movies/:id", async (req, res) => {
    const { id } = req.params;
    try {
        connection.query(
            queryGetMovieById(process.env.DB_NAME, id),
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                    res.send({ error: err });
                } else {
                    console.log(results);

                    res.send({ results });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
});

const queryGetTimeslotsByMovieId = (dbname, id) => {
    return `SELECT * FROM \`${dbname}\`.\`timeslots\` WHERE movie_id = ${id};`;
};

// GET /api/movies/:id/timeslots
app.get("/api/movies/:id/timeslots", async (req, res) => {
    const { id } = req.params;
    try {
        connection.query(
            queryGetTimeslotsByMovieId(process.env.DB_NAME, id),
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                    res.send({ error: err });
                } else {
                    console.log(results);
                    res.send({ results });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
});

//monitoring
const show_all_act = (dbname, upper_time,lower_time) => {
    return `SELECT * FROM \`${dbname}\`.\`activities\` WHERE (end_time > '${lower_time}' AND end_time <= '${upper_time}');`;
};

const insert_act=(dbname,names,code,start_time,end_time,received,spend,kpi,descriptions)=>{
    return `INSERT INTO \`${dbname}\`.\`activities\` (names,code,start_time,end_time,received,spend,kpi,descriptions) VALUES ('${names}','${code}','${start_time}','${end_time}',${received},${spend},${kpi},'${descriptions}');`;
};

app.post("/api/monitoring", async(req,res)=>{
    const upper_time=req.body.end_time;
    const lower_time=req.body.start_time;
    try {
        connection.query(
            show_all_act(process.env.DB_NAME, upper_time,lower_time),
            function (err, results) {
                if (err) {
                    console.log(err);
                    res.send({ error: err });
                } else {
                    res.send({ results:results });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
})

app.post("/api/monitoring/add",async(req,res)=>{
    const {names,code,start_time,end_time,received,spend,kpi,descriptions}=req.body;
    try {
        connection.query(
            insert_act(process.env.DB_NAME, names,code,start_time,end_time,received,spend,kpi,descriptions),
            function (err, results) {
                if (err) {
                    console.log(err);
                    res.send({ error: err,results:false });
                } else {
                    res.send({ results:true });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
})

// GET /api/genres?ids=[]
app.get("/api/genres", async (req, res) => {
    const { ids } = req.query;
    try {
        connection.query(
            `SELECT * FROM \`${process.env.DB_NAME}\`.\`genres\` WHERE id IN (${ids});`,
            function (err, results, fields) {
                if (err) {
                    console.log(err);
                    res.send({ error: err });
                } else {
                    console.log(results);
                    res.send({ results });
                }
            }
        );
    } catch (e) {
        console.log(e);
        res.send({ error: e });
    }
});

// Start the server
try {
    app.listen(8080, () => {
        console.log("Server listening on port 8080");
    });
} catch (e) {
    console.log(e);
}

// BATCH INSERTION SCRIPT
//

// const API_KEY = process.env.API_KEY;
// const API_URL = "https://api.themoviedb.org/3/movie/";
// const axios = require("axios");

// // get movie by id
// const getMovie = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}${id}?api_key=${API_KEY}`);
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// const processGenre = (genre_ids) => {
//   const insertGenres = (gen_id, name) => {
//     return `INSERT INTO \`${process.env.DB_NAME}\`.\`genres\` (id, name) VALUES ('${gen_id}', '${name}');`;
//   };
//   console.log("genre_ids", genre_ids);
//   const data = genre_ids;
//   try {
//     for (const genre of data) {
//       connection.query(
//         insertGenres(genre.id, genre.name),
//         function (err, results, fields) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(results);
//           }
//         }
//       );
//     }
//   } catch (e) {
//     console.log(e);
//   }

//   // return array of ids as string
//   return data.map((genre) => genre.id).join(",");
// };

// const escape = (str) => {
//   return str.replace(/'/g, "\\'");
// };

// const customiseStatus = (status) => {
//   console.log("[][][]", status);
//   if (status === "Released") {
//     return 1;
//   } else if (status === "Rumored") {
//     return 2;
//   } else if (status === "Post Production") {
//     return 3;
//   } else {
//     return 4;
//   }
// };

// // insert
// const insertQuery = (
//   dbname,
//   title,
//   adult,
//   poster_path,
//   vertical_poster_path,
//   overview,
//   genre_ids,
//   language,
//   release_date,
//   status
// ) => {
//   return `INSERT INTO \`${dbname}\`.\`movies\` (title, adult, poster_path, vertical_poster_path, overview, genre_ids, language, release_date, status) VALUES ('${title}', '${adult}', '${poster_path}', '${vertical_poster_path}', '${overview}', '${genre_ids}', '${language}', '${release_date}', '${status}');`;
// };
// // JUST EDIT THIS LINE
// const ids = [1045944, 19995, 550, 505642, 436270, 736526, 724495, 76600, 873126];
// // const ids = [1045944];
// const insert = async (ids) => {
//   try {
//     for (const id of ids) {
//       const movie = await getMovie(id);
//       connection.query(
//         insertQuery(
//           process.env.DB_NAME,
//           movie.title,
//           movie.adult ? 1 : 0,
//           escape(movie.poster_path),
//           escape(movie.backdrop_path),
//           escape(movie.overview),
//           processGenre(movie.genres),
//           movie.original_language,
//           movie.release_date,
//           customiseStatus(movie.status)
//         ),
//         function (err, results, fields) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(results);
//           }
//         }
//       );
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// insert(ids);

// // timeslots
// const queryInsertTimeslots = (dbname, timeslots) => {
//   const insert = () => {
//     return `INSERT INTO \`${dbname}\`.\`timeslots\` (movie_id, start_time, duration, price, empty_seats) VALUES`;
//   };
//   const values = (movie_id, start_time, duration, price, empty_seats) => {
//     return `(${movie_id}, '${start_time}', ${duration}, ${price}, ${empty_seats})`;
//   };
//   let query = insert();
//   timeslots.forEach((timeslot) => {
//     // if not last element
//     if (timeslot !== timeslots[timeslots.length - 1]) {
//       query += ` ${values(
//         timeslot.movie_id,
//         timeslot.start_time,
//         timeslot.duration,
//         timeslot.price,
//         timeslot.empty_seats
//       )},`;
//     } else {
//       query += `${values(
//         timeslot.movie_id,
//         timeslot.start_time,
//         timeslot.duration,
//         timeslot.price,
//         timeslot.empty_seats
//       )};`;
//     }
//   });
//   return query;
// };

// // timeslots
// const genMockTimeslots = (movie_id) => {
//   const timeslots = [];
//   // start time format: YYYY-MM-DD HH:MM (24-hour)
//   const start_time = new Date();
//   for (let i = 0; i < 10; i++) {
//     timeslots.push({
//       movie_id,
//       start_time: start_time.toISOString().slice(0, 19).replace("T", " "),
//       duration: Math.floor(Math.random() * 120) + 60,
//       price: Math.floor(Math.random() * 5) * 10000 + 70000,
//       empty_seats: Math.floor(Math.random() * 20),
//     });
//     start_time.setHours(start_time.getHours() + 2);
//   }
//   return timeslots;
// };

// for (let i = 0; i < 9; i++) {
//   const timeslots = genMockTimeslots(i + 1);
//   connection.query(
//     queryInsertTimeslots(process.env.DB_NAME, timeslots),
//     function (err, results, fields) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(results);
//       }
//     }
//   );
// }
