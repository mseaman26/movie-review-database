const express = require('express');
const mysql = require("mysql")

const PORT = 3000

const app = express()
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "movies_db"
    },
    console.table("connected to the database")
);

app.get("/api/movies", (req, res) => {
    db.query('SELECT * FROM movies_db.movies', function (err, results) {
        console.log("********* SELECT * FROM movies results[0]");
        console.log(results);
        console.log("*********");
        res.json(results)
      });
      
})
app.get("/api/movie/:id", (req, res) => {
    db.query('SELECT name FROM movies_db.movies WHERE id=?',req.params.id, function (err, results) {
        console.log("********* SELECT id FROM movies reviews")
        console.log(results);
        console.log("*********");
        res.json(results)
      });
      
})

app.get("/api/movie-reviews", (req, res) => {
    db.query('SELECT movies.name, reviews.review FROM movies JOIN reviews ON movies.id = reviews.movie_id ', function (err, results) {
        if (err) {
            console.log(err)
        }
        console.log("********* SELECT * FROM movies reviews")
        console.log(results);
        console.log("*********");
        res.json(results)
      });
      
})
// FROM movies_db.reviews JOIN movies ON movies.id = reviews.movie_id 
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));