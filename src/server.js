var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./db/config');
    routes = require('./routes/sessionRoutes');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.config).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/', routes);
    const port = process.env.PORT || 4000;

    const server = app.listen(function() {
        console.log('Listening on port ' + port);
    });