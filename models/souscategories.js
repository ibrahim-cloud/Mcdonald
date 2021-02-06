const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const souscategoriesSchema = new Schema({

    name: {
        type: String, 
        required : true  
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required : true 
    },

});

const souscategories = mongoose.model(" souscategories", souscategoriesSchema);
module.exports = souscategories;