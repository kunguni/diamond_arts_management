const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/mongodb');
const {Schema} = mongoose;
const teacherRegSchema = new Schema({
    phone:{
        type:String,
        lowercase:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});
teacherRegSchema.pre('save',async function(){
    try{
        var user = this;
        const salt = await (bcrypt.genSalt(10));
        const hashpass = await bcrypt.hash(user.password,salt);
        user.password = hashpass;
    } catch(error)
    {
        throw error;
    }
})
// check using bcrypt if the passwords of the user are matching..
teacherRegSchema.methods.comparePassword = async function(userPassword){
    try
    {
        const isMatch = await  bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch(error)
    {
        throw error;
    }
}
const TeacherRegModel = mongoose.model('Teacher/Marketers',teacherRegSchema);
module.exports = TeacherRegModel;