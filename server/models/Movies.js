const { Schema, model } = require('mongoose');
const reviewSchema = require('./Review')


const movieSchema = new Schema(
  {
    movieTitle: {
      type: String,
      require: 'Movies need a title'
    },
    movieUrl: {
      type: String,
      required: true
    },
    moviePicUrl: {
      type: String,
      required: true
    },
    reviews: [reviewSchema]
  }
)

const Movies = model('Movies', movieSchema);

module.exports = Movies;