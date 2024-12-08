const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://thiruparab:singaporenew@cluster0.taoo5.mongodb.net/mevn_auth?retryWrites=true&w=majority&appName=Cluster0',{
            // useUnifitedTopology: true,
            // useNewUrlParse: true
        })
    } catch(error){ 
        console.log(error)
    }
}

module.exports = connect