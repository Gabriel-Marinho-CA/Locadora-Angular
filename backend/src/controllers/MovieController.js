const MovieModel = require("../models/Movie");

class MovieController {

    async addMovie(req, res) {
        try {
            const {
                image,
                title,
                description,
                price
            } = req.body;

            if (!image || !title || !price) {
                return res.status(400).json({
                    msg: "All information are nedded"
                })
            }

            const MovieAlreadyExist = await MovieModel.findOne({
                title
            })

            if (MovieAlreadyExist) {
                return res.status(400).json({
                    msg: "Movie already exist"
                });
            }

            const MovieCreated = await MovieModel.create(req.body);
            return res.status(200).json(MovieCreated);


        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }
    }

    async getAllMovies(req, res) {
        try {
            const getAllMovies = await MovieModel.find({});

            return res.status(200).json({
                data: getAllMovies
            });
        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }

    }

}

module.exports = new MovieController();