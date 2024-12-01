const mongoose = require('mongoose')

async function connect(){
    try{
        await mongooose.connect(process.env.DATABASE_URI,{
            useUnifitedTopology: true,
            useNewUrlParse: True
        })
    } catch(error){
        console.log(error)
    }
}

module.exports = connect