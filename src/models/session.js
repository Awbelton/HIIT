var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Session = new Schema({
    date: {
        type: Date
    },
    duration: {
        type: String
    },
    exercises: {
        type: []
    }
}, {
    collection: 'sessions'
});

module.exports = mongoose.model('Session', Session);