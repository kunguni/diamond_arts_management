const ThirdTermMarketerServices = require('../services/third_term_marketer_service');
exports.createMarketerdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber}=req.body;
       let marketerdetails = await ThirdTermMarketerServices.createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber);
       res.json({status:true,success:"Third Term Marketer Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getThirdTermMarketerDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let thirdtermmarketerdetails = await ThirdTermMarketerServices.getThirdTermMarketerDetails(userId);
    res.json({status:true,success:thirdtermmarketerdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteThirdTermMarketingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await ThirdTermMarketerServices.deleteThirdTermMarketingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}