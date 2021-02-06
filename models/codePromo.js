const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const codePromoSchema = new Schema({
    
    code: {
        type: Number ,
        required : true 
         
    },
    gift: {
        type: String  ,
        required : true 
        

    },
});

const codePromo = mongoose.model(" codePromo", codePromoSchema);
module.exports = codePromo;