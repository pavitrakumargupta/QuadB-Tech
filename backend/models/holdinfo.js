const mongoose = require('mongoose');


const HOLDINFO= new mongoose.Schema()

const Info=mongoose.model('HOLDINFO',HOLDINFO)
module.exports=Info