const mongoose = require('mongoose');

const InfoSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email :{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    company:{
        type:String,
        require:true
    }
})

const Info = mongoose.model('Information', InfoSchema);
module.exports = Info;