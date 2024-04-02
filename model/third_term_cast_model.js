const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');
const {Schema} = mongoose;
const castSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     name:{
        type:String
     },
     idNumber:{type:String},
     position:{type:String},
   salary:{type:Number},
     contract:{type:Number},
     phoneNumber:{type:String},
    // Add other fields as needed
  });
  const ThirdTermCastDetailsModel = mongoose.model('Third Term Cast  Details', castSchema);

  module.exports = ThirdTermCastDetailsModel;