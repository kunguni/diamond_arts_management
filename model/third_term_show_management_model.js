const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');
const {Schema} = mongoose;
const showsSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     marketerName:{
        type:String
     },
     schoolName:{type:String},
     schoolLocation:{type:String},
   datePerformed:{type:Date},
     noOfStudents:{type:Number},
     booksPerformed:{type:[String]} ,
     earnings:{type:Number},
     expenses:{type:Number}    // Add other fields as needed
  });
  const ThirdTermShowsManagementModel = mongoose.model('Third Term Performed Shows Managent', showsSchema);
  module.exports = ThirdTermShowsManagementModel;