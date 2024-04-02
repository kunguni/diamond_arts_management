const FirstTermShowsManagementServices = require('../services/first_term_show_management_service');
exports.createPerformedShowdetails = async (req,res,next)=>
{
    try {
        const {userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses}=req.body;
       let  performedshowdetails = await FirstTermShowsManagementServices.createPerformedShowdetails(userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses);
       res.json({status:true,success:"Performed Show Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getPerformedShowDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let firsttermperformedshowdetails = await FirstTermShowsManagementServices.getPerformedShowDetails(userId);
    res.json({status:true,success:firsttermperformedshowdetails});
    }
    catch(error)
    {
        throw error;
    }
}

exports.deletePerformedShowDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await FirstTermShowsManagementServices.deletePerformedShowDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}