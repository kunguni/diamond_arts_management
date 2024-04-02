const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');
const {Schema} = mongoose;
const marketersSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     name:{
        type:String
     },
     idNumber:{type:String},
     location:{type:String},
    marketerNumber:{type:String},
   schoolsVisited:{type:Number},
     postersGiven:{type:Number},
     phoneNumber:{type:String},
    // Add other fields as needed
  });
  const thirdTermDetailsModel = mongoose.model('Third Term Marketer Details', marketersSchema);

  module.exports = thirdTermDetailsModel;