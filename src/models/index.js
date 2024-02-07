const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


Movie.belongsToMany(Director, {through: 'moviesDirectors'})
Director.belongsToMany(Movie, {through: 'moviesDirectors'})

Movie.belongsToMany(Genre, {through: 'moviesGenres'})
Genre.belongsToMany(Movie, {through: 'moviesGenres'})

Movie.belongsToMany(Actor, {through: 'moviesActors'})
Actor.belongsToMany(Movie, {through: 'moviesActors'})
// Director.belongsTo(Movie)
// Movie.hasMany(Director)

// Actor.belongsTo(Movie)
// Movie.hasMany(Actor)

// Genre.belongsTo(Movie)
// Movie.hasMany(Genre)

