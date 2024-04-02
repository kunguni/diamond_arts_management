const ThirdTermBookingServices = require('../services/third_term_booking_service');
exports.createBookingdetails = async (req,res,next)=>
{
    try {
        const {userId,date,schoolName,booksPerformed}=req.body;
       let  bookingdetails = await ThirdTermBookingServices.createBookingdetails(userId,date,schoolName,booksPerformed);
       res.json({status:true,success:"Booking Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getBookingDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let thirdtermbookingdetails = await ThirdTermBookingServices.getBookingDetails(userId);
    res.json({status:true,success:thirdtermbookingdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteBookingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await ThirdTermBookingServices.deleteBookingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}