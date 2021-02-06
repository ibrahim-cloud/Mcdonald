const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({

   
    

    productname: {
        type: String ,
        required : true  
    },
    productPrice: {
        type: Number ,
        required : true  
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required : true 
    },
    souscategories: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'souscategories',
        required : true 
    }

});

const product = mongoose.model(" product", productSchema);
module.exports = product;