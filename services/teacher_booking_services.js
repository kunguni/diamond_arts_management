const TeacherBookingModel = require('../model/teacher_booking_model');
class TeacherBookingServices{
    static async createTeacherBooking(name,phone,county,subcounty,packages,group)
    {
        const createTeacherBooking = new TeacherBookingModel({name,phone,county,subcounty,packages,group});
        return await createTeacherBooking.save();
    }
    static async getTeacherBookingDetails(userId)
    {
        const teacherBookingData = await TeacherBookingModel.find({userId});
        return teacherBookingData;
    }
}
module.exports = TeacherBookingServices;