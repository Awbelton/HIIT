var express = require('express');
var app = express();
var sessionRoutes = express.Router();
var Session = require('../models/session');

sessionRoutes.route('/add').post(function (req, res) {
    var coin = new Session(req.body);
     coin.save()
      .then(item => {
        res.status(200).json({'session': 'Session added successfully'});
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

  module.exports = sessionRoutes;