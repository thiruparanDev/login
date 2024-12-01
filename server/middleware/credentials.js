const allowedOrigins = require('./allowed origins')

const credentials = (req, res, next) =>{
    const origin = req.headers.allowedOrigins
    

    if (allowedOrigins.includes(origin)){
        res.headre('Access-Control-Allow-Origins', true)
    }
    next()
}

module.exports = credentials