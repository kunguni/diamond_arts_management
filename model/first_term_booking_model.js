const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');
const {Schema} = mongoose;
const bookingSchema = new mongoose.Schema(
    {
        userId:{
    type:Schema.Types.ObjectId,
    ref:UserModel.modelName,
     },
     date:{type:Date},
     schoolName:{type:String},
     booksPerformed:{type:[String]} ,
    //Add other fields as needed
  });
  const FirstTermBookingModel = mongoose.model('First Term Booking Data', bookingSchema);

  module.exports = FirstTermBookingModel;