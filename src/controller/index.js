const session = require('express-session');

const login = async (req, res, next ) => {
    if (req.session.nombre) {
        nombre = req.session.nombre
        res.render('prueba', { nombre })
    } else {
        res.redirect('login')
    }
    
}
  
const sesion = (req, res, next ) => {
    console.log('saludos desde el post');
    const { nombre } = req.body;
    req.session.nombre = nombre;
    if(nombre){
        req.session.nombre = nombre;
    }
    
    res.render('login', { nombre })
}

const logout = (req, res, next) => {
    req.session.destroy(err => {
        if(err){
            return res.json({ status: 'Logout ERROR', body: err});
        }
        res.send('Logout ok!')
    })
}

module.exports = {login, sesion, logout}