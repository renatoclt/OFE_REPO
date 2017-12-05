sequelize = require("sequelize");
conexion = require('./servidor/configuracion/conexion');
express = require('express');
path = require('path');
logger = require('morgan');
cookieParser = require('cookie-parser');
bodyParser = require('body-parser');
routes = require('./servidor/rutas/rutasModulos');
hateoasLinker = require('express-hateoas-links');
app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(hateoasLinker);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.use(function (req, res, next) {
  const err = new Error('No Encontrado');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

app.use(function (err, req, res) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;