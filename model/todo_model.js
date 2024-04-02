const mongoose = require('mongoose');
const db = require('../config/mongodb');
const UserModel = require('../model/user_model');

const{Schema} = mongoose;
const todoSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:UserModel.modelName,
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    }
});
const ToDoModel = db.model('todolist',todoSchema);
module.exports = ToDoModel;