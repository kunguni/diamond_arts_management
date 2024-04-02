const SecondTermMarketerServices = require('../services/second_term_marketer_services');
exports.createMarketerdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber}=req.body;
       let marketerdetails = await SecondTermMarketerServices.createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber);
       res.json({status:true,success:"Second Term Marketer Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getSecondTermMarketerDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let secondtermmarketerdetails = await SecondTermMarketerServices.getSecondTermMarketerDetails(userId);
    res.json({status:true,success:secondtermmarketerdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteSecondTermMarketingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await SecondTermMarketerServices.deleteSecondTermMarketingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}