const marketerServices = require('../services/first_term_marketer_services');
exports.createMarketerdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber}=req.body;
       let marketerdetails = await marketerServices.createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber);
       res.json({status:true,success:"Marketer Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getFirstTermMarketerDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let firsttermmarketerdetails = await marketerServices.getFirstTermMarketerDetails(userId);
    res.json({status:true,success:firsttermmarketerdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteFirstTermMarketingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await marketerServices.deleteFirstTermMarketingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}