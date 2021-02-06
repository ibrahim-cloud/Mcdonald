const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const tableSchema = new Schema({
  

    tablenumber: {
        type: Number ,
        required : true ,
        
    },
    disponible : {
        type: Boolean ,
        default : true,
         
    }

});

const table = mongoose.model(" table", tableSchema);
module.exports = table;