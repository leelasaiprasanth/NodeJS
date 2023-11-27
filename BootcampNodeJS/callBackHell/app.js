const { error } = require("console");
const fs = require("fs");
const request = require("request");

fs.readFile("movie.txt", (error, query) => {
  if (error) return console.log(error);

  request(
    "https://api.themoviedb.org/3/search/movie?api_key=14ab96eb03680c8acb02155546affd8a&query=" +
      query.toString(),
    { timeout: 0 },
    (error, response, body) => {
      if (error) return console.log(error);

      let movies = JSON.parse(body);

      movies.results.forEach((movies) => {
        console.log(movies.original_title);
      });
    }
  );
});
