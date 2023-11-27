const { error } = require("console");
const fs = require("fs");
const request = require("request-promise");

const readMovieFilePromise = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

readMovieFilePromise("movie.txt")
  .then((query) => {
    return (
      "https://api.themoviedb.org/3/search/movie?api_key=14ab96eb03680c8acb02155546affd8a&query=" +
      query.toString()
    );
  })
  .then((url) => {
    request(url, { timeout: 0 }).then((body) => {
      let movies = JSON.parse(body);

      movies.results.forEach((movies) => {
        console.log(movies.original_title);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  });
