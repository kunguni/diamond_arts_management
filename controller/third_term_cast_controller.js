const thirdTermCastServices = require('../services/third_term_cast_services');
exports.createCastdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,position,salary,contract,phoneNumber}=req.body;
       let  castdetails = await thirdTermCastServices.createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber);
       res.json({status:true,success:"Cast Details Saved Successfully"});
      } catch (error) {
        next(error);
      
}
}
exports.getCastDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let thirdtermcastdetails = await thirdTermCastServices.getCastDetails(userId);
    res.json({status:true,success:thirdtermcastdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteCastDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await thirdTermCastServices.deleteCastDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}