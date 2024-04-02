const mongoose = require('mongoose');
const db = require('../config/mongodb');
const TeacherRegModel = require('../model/teacher_reg_model');
const{Schema} = mongoose;
const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  county: String,
  subcounty: String,
  packages: [String],
  group: String
});

module.exports = mongoose.model('Booking', BookingSchema);