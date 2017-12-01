var User = require('../../modelos/prueba/User');

User.buscarProducto = function (id) {
    sequelize.sync()
        .then(function () {
            User.findById(id).then(function (user) {
                console.log(user);
            });
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
};

module.exports = User;