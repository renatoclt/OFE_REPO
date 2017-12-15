var Maestra = require('../../modelos/comprobantes/maestra')

Maestra.filtro = function(){
    sequelize.authenticate().then(function(){
        console.log('ingrese');
    });
    return 2;
}

module.exports = Maestra;