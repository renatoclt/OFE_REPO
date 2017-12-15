var dtoControladorMaestra = require('../../modelos/comprobantes/maestra')

var contoladorMaestras = function (ruta, rutaEsp){ 
    router.get(ruta.concat('/'), function (req, res, next) {
        res.send({embebed:'prueba'});
    });

    router.get(ruta.concat('/search/filtros'), function (req, res, next) {
        var tabla=0;
        dtoControladorMaestra.
        if (req.query.tabla && req.query.tabla>0){
            console.log('ingrese');
            codigo = req.query.codigo;
            res.send('ok');
        }
        else{
            res.send('error');
        }
    });
};

module.exports = contoladorMaestras;