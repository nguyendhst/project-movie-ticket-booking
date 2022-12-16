const db = require("mysql2");
const dotenv = require("dotenv");
const express = require("express");
const app = express();

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
// `movies` --  (id, title, adult, poster_path, overview, genre_ids, language, release_date)
// `genres` -- (id, name)

const testQuery = (dbname) => {
  return `SELECT * FROM \`${dbname}\`.\`movies\`;`;
};
// Create a route
app.get("/", async (req, res) => {
  try {
    connection.query(
      testQuery(process.env.DB_NAME),
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
//     const insertGenres = (gen_id, name) => {
//         return `INSERT INTO \`${process.env.DB_NAME}\`.\`genres\` (id, name) VALUES ('${gen_id}', '${name}');`;
//     }
//     console.log("genre_ids", genre_ids);
//     const data = genre_ids;
//     try {
//         for (const genre of data) {
//             connection.query(
//                 insertGenres(
//                     genre.id,
//                     genre.name
//                 ),
//                 function (err, results, fields) {
//                     if (err) {
//                         console.log(err);
//                     } else {
//                         console.log(results);
//                     }
//                 }
//             );
//         }
//     } catch (e) {
//         console.log(e);
//     }

//     // return array of ids as string
//     return data.map((genre) => genre.id).join(",");
// }

// const escape = (str) => {
//   return str.replace(/'/g, "\\'");
// };

// // insert
// const insertQuery = (
//   dbname,
//   title,
//   adult,
//   poster_path,
//   overview,
//   genre_ids,
//   language,
//   release_date
// ) => {
//   return `INSERT INTO \`${dbname}\`.\`movies\` (title, adult, poster_path, overview, genre_ids, language, release_date) VALUES ('${title}', '${adult}', '${poster_path}', '${overview}', '${genre_ids}', '${language}', '${release_date}');`;
// };

// // JUST EDIT THIS LINE
// const ids = [1045944, 19995, 550, 505642, 436270, 736526, 724495, 76600, 873126];

// const insert = async (ids) => {
//   try {
//     for (const id of ids) {
//       const movie = await getMovie(id);
//       connection.query(
//         insertQuery(
//           process.env.DB_NAME,
//           movie.title,
//           "0",
//           escape(movie.poster_path),
//           escape(movie.overview),
//           processGenre(movie.genres),
//           movie.original_language,
//           movie.release_date
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