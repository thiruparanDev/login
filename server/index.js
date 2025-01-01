require('dotenv').config()

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')
const corsOptions = require('./config/cors')
const connectDB = require('./config/database')
const credentials = require('./middleware/credentials')
const errorHandlerMiddleware = require('./middleware/error_handler')
const authenticationMiddleware = require('./middleware/authentication')

const app = express()
const PORT = 3500

connectDB()

// Allow Credentials
app.use(credentials)

// CORS
app.use(cors(corsOptions))

// application.x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))


// application/json response
app.use(express.json())

// middleware for cookies
app.use(cookieParser())

app.use(authenticationMiddleware)

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Default error handler
app.use(errorHandlerMiddleware)


// Routes
app.use('/api/auth', require('./routes/api/auth'))
// app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/bucketListItems', require('./routes/api/bucketListItems'))

app.all('*', (req, res) => {
  res.status(404)

  if(req.accepts('json')){
    res.json({'error': '404 Not Found'})
  }else{
    res.type('text').send('404 Not Found')
  }
})

mongoose.connection.once('open', ()=>{
  console.log('DB connected')
  app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })
})
// require('dotenv').config()

// const express = require('express')
// const cors =require('cors')
// const cookieParser = require('cookie-parser')
// const mongoose = require('mongoose')
// const path = require('path')
// // const corsOptions = require('./config/cors')
// const connectDB = require('./config/database')
// const credentials = require('./middleware/credentials')
// const errorHandlerMiddleware = require('./middleware/error_handler')
// const app = express()

// const PORT = 3500 

// connectDB()

// app.use(credentials) 

// //TO DO: allowed for all origins need to update with required origins
// app.use(cors())

// app.use(express.urlencoded({extended: false}))

// app.use(express.json())

// app.use(cookieParser())

// app.use('/static',express.static(path.join(__dirname,'public')))

// app.use(errorHandlerMiddleware)

// app.use('/api/auth', require('./routes/api/auth'))

// // app.all('*', (req ,res)=>{
// //     res.status(404)
// // })


// mongoose.connection.once('open',()=>{
//     console.log('DB connected')
//     app.listen(PORT, ()=>{console.log(`listening on port${PORT}`)})
// })

// app.get('/', (req,res,next)=>{
//     res.send('hello')
// })

//fomr other
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const User = require('./models/User');
// const bcrypt = require('bcrypt')

// const express = require('express')
// const app = express()
// app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }));

// const port = process.env.PORT || 5000;

// app.post('/signup',(req,res,next)=>{
//     console.log(req.body)
//     const newUser = new User({
//         email: req.body.email,
//         name: req.body.name,
//         password: bcrypt.hashSync(req.body.password,10)
//     })
//     console.log(newUser)
// })

// app.listen(port,(err)=>{
//     console.group('server running on port', port)
// })

// app.get('/', (req,res,next)=>{
//     res.send('hello')
// })