TeacherRegModel = require('../model/teacher_reg_model');
const jwt = require('jsonwebtoken');
class TeacherRegService{
    static async registerTeacher(phone,password)
    {
        try{
            const createUser = new TeacherRegModel({phone,password});
            return await createUser.save();
                }
    catch(err){
        throw err;
    }
}
    static async checkUser(phone)
    {
        try
        {
       return await TeacherRegModel.findOne({phone});
        }
        catch(error)
        {
            throw error;
        }
    }
    static async generateToken (tokenData,secretKey,jwt_expire)
    {
        return jwt.sign(tokenData,secretKey,{expiresIn:jwt_expire});
    }
}
module.exports = TeacherRegService;