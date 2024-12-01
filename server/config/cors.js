const allowedOrigins = require('./allowed_origins')

const corsOptions = {
    origin: ()=>{
        if(allowedOrigins.includes(origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}

MediaSourceHandle.exports = corsOptions