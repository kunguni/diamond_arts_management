const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');
const {Schema} = mongoose;
const productionSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
    productionName:{
        type:String,
    },
    locationCounty:{type:String},
    packages: [String],
    // Add other fields as needed
  });
  const ProductionModel = mongoose.model('Production Details', productionSchema);

  module.exports = ProductionModel;