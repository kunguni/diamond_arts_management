const TeacherBookingServices = require('../services/teacher_booking_services');
exports.createTeacherBooking  = async (req,res,next) =>
{
  try{
        const{name,phone,county,subcounty,packages,group} = req.body;
        let teacherbooking = await TeacherBookingServices.createTeacherBooking(name,phone,county,subcounty,packages,group);
        res.json({status:true,success:'Teacher Booking Data Saved Successfully'});

  } catch(error)
  {
    throw error;
  }
}
exports.getTeacherBooking = async (req,res,next)=>{
    try
    {
    const {userId} = req.body;
    let teacherbookingdetails = await TeacherBookingServices.getTeacherBookingDetails(userId);
    res.json({status:true,success:teacherbookingdetails});
    }catch(error)
    {
        throw error;
    }
}