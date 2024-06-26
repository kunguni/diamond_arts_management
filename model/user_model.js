const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/mongodb');
const {Schema} = mongoose;
const userSchema = new Schema({
    email:{
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
userSchema.pre('save',async function(){
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
userSchema.methods.comparePassword = async function(userPassword){
    try
    {
        const isMatch = await  bcrypt.compare(userPassword,this.password);
        return isMatch;
    } catch(error)
    {
        throw error;
    }
}
const UserModel = mongoose.model('dsatusers',userSchema);
module.exports = UserModel;