const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/vod');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongodb connection open'));

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  session: String,
  videos: [String],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;