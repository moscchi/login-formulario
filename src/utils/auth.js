const isAuth = (req, res, next) => {
    console.log(req.body.nombre);
    if(req.session?.nombre === req.body.nombre){
        return next();
    }

    res.render('login');
}
module.exports = {isAuth};