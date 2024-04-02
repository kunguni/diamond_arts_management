const TeacherRegService = require('../services/teacher_reg_services');
const TeacherRegModel = require('../model/teacher_reg_model');
exports.register = async(req,res,next)=>{
    try{
        const{userId,phone,password} = req.body;
        const successRes = await TeacherRegService.registerTeacher(userId,phone,password);
    res.json({status:true,success:"User registered successfully"});
    }
    catch(error)
    {
        throw error;
    }
}
exports.login = async(req,res,next)=>{
    try{
        const {phone,password} = req.body;
        const user = await TeacherRegService.checkUser(phone);
        if(!user)
        {
            throw new Error('User Dont Exist');
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch===false)
        {
            throw new Error('Invalid Password');
        }
    
        let tokenData = {_id:user._id,phone:user.phone}; 
        const token = await TeacherRegService.generateToken(tokenData,"secretKey",'1h');
        res.status(200).json({status:true,token:token});
    } 
    catch(error)
    {
        throw(error);
    }
}