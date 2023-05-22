const User = require("../models/User");
const Movie = require("../models/Movie");

class MovieController {
    async addUser(req, res) {
        try {
            const {
                name,
                email,
                password
            } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({
                    msg: "All fields need to be completed"
                })
            }

            const duplicateUser = await User.findOne({
                email
            })

            if (duplicateUser) {
                return res.status(404).json({
                    msg: "User already created"
                })
            }

            const userCreated = await User.create(req.body);

            return res.status(200).json(userCreated);

        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }

    }
    async getUser(req, res) {
        try {
            const {
                email,
                password
            } = req.body

            const UserData = await User.findOne({
                email
            })

        
            if (UserData && UserData.password == password) {
                return res.status(200).json(UserData);
            }

            return res.status(400).json({
                msg: "Usuário ou senha inválidos"
            })

        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }
    }
    async getUserProfile(req, res) {
        try {
            const {
                id
            } = req.params;


            const UserProfile = await User.findById(id);

            const getUserMovies = await Promise.all(
                UserProfile.movies.map(async (movie) => {
                    const movieId = movie.toString();
                    const MovieByUser = await Movie.findById(movieId);
                    return {
                        title: MovieByUser.title,
                        image: MovieByUser.image,
                        price: MovieByUser.price,
                        _id: MovieByUser._id
                    }
                })
            );

            const UserProfileData = {
                name: UserProfile.name,
                _id: UserProfile._id,
                movies: getUserMovies
            }

            return res.status(200).json(UserProfileData);

        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }
    }
    async deleteMovieFromProfile(req, res) {
        try {
            const {
                id
            } = req.params
            
            const {
                movieToRemove
            } = req.body

            const removeFromArray = await User.findByIdAndUpdate(
                id, {
                    $pull: {
                        movies: movieToRemove

                    }
                })

            return res.status(200).json(removeFromArray)
        } catch (error) {
            return res.status(404).json({
                err: error
            })
        }
    }
}
module.exports = new MovieController();