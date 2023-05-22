const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Schema.ObjectId,
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
},{ timestamps: true })

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;

