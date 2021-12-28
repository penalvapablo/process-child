const productTestController = require('../components/productTest/ProductTestController');
const UsersRegistro = require('../components/users/UsersRegistro');
const UsersLogin = require('../components/users/UsersLogin');
const isLoggedIn = require('../utils/isLoggedIn');
const authenticateToken = require('../utils/authenticateToken')

module.exports = (app) => {
  productTestController(app);
  UsersRegistro(app);
  UsersLogin(app)

  app.get('/', authenticateToken, (req, res) => {
    // res.render('index', { mail: req.session.mail });
    res.send('ok')
  });

  app.get('/logout', (req, res) => {

    res.render('logout');
  });

  app.get('*', (req, res) =>
    res.status(404).json({
      error: -2,
      description: `ruta ${req.originalUrl} método get no implementado`,
    })
  );
};
