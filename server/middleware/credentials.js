const allowedOrigins = require('../config/allowed_origins')

const credentials = (req, res, next) =>{
    const origin = req.headers.allowedOrigins
    

    if (allowedOrigins.includes(origin)){
        res.header('Access-Control-Allow-Origins', true)
    }
    next()
}

module.exports = credentials