var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.initDb = function () {
  mongoose.connect('mongodb://mongo:27017/bluffmaster', {
    useNewUrlParser: true,
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected');
    Participants = require('../models/Participants');
    Questions = require('../models/Questions');
    Variables = require('../models/Variables');
    Votes = require('../models/Votes');
    Scores = require('../models/Scores');
  });
};
