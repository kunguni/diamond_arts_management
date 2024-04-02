const FirstTermBookingServices = require('../services/first_term_booking_service');
exports.createBookingdetails = async (req,res,next)=>
{
    try {
        const {userId,date,schoolName,booksPerformed}=req.body;
       let  bookingdetails = await FirstTermBookingServices.createBookingdetails(userId,date,schoolName,booksPerformed);
       res.json({status:true,success:"Booking Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getBookingDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let firsttermbookingdetails = await FirstTermBookingServices.getBookingDetails(userId);
    res.json({status:true,success:firsttermbookingdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteBookingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await FirstTermBookingServices.deleteBookingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}
