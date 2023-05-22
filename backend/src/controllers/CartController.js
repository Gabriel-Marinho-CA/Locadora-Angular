const MovieModel = require("../models/Movie");
const User = require("../models/User");

class CartController {

    async getMovie(req, res) {

        try {
            const {
                id
            } = req.params

            const cartWithMovie = await MovieModel.findById(id);

            return res.status(200).json(cartWithMovie);

        } catch (error) {
            return res.status(404).json({
                err: error
            });
        }

    }
    async addMovieToUser(req, res) {
        try {
            const {
                userLoggedId,
                movieToAppend
            } = req.body;

            const userFind = await User.findByIdAndUpdate(userLoggedId, {
                $addToSet: {
                    movies: movieToAppend
                },
                $currentDate: {
                    lastModified: true
                }
            })
            return res.status(200).json(userFind);

        } catch (error) {
            return res.status(404).json({
                err: error
            });
        }
    }
}

module.exports = new CartController();