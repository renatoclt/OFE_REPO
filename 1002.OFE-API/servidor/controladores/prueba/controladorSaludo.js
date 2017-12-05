router.get('/', function(req, res, next) {
    res.json({ mensaje: 'Bienvenido a nuestra api de Offline!' });    
});

module.exports = router;
