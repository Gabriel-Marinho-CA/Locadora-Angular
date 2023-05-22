const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    id: Schema.ObjectId,
    image: {
        type:String,
        require:true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: String,
});


const MovieModel = mongoose.model('Movie', MovieSchema);

module.exports = MovieModel;