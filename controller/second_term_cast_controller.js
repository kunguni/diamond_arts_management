const secondTermCastServices = require('../services/second_term_cast_services');
exports.createCastdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,position,salary,contract,phoneNumber}=req.body;
       let  castdetails = await secondTermCastServices.createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber);
       res.json({status:true,success:"Cast Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getCastDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let secondtermcastdetails = await secondTermCastServices.getCastDetails(userId);
    res.json({status:true,success:secondtermcastdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteCastDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await secondTermCastServices.deleteCastDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}