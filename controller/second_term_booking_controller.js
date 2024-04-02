const SecondTermBookingServices = require('../services/second_term_booking_service');
exports.createBookingdetails = async (req,res,next)=>
{
    try {
        const {userId,date,schoolName,booksPerformed}=req.body;
       let  bookingdetails = await SecondTermBookingServices.createBookingdetails(userId,date,schoolName,booksPerformed);
       res.json({status:true,success:"Booking Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getBookingDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let secondtermbookingdetails = await SecondTermBookingServices.getBookingDetails(userId);
    res.json({status:true,success:secondtermbookingdetails});
    }catch(error)
    {
        throw error;
    }
}

exports.deleteBookingDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await SecondTermBookingServices.deleteBookingDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}