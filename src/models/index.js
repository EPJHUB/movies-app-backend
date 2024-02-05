const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


Director.belongsTo(Movie)
Movie.hasMany(Director)

Actor.belongsTo(Movie)
Movie.hasMany(Actor)

Genre.belongsTo(Movie)
Movie.hasMany(Genre)

