const ThirdTermBookingModel = require('../model/third_term_booking_model');
class ThirdTermBookingServices{
    static async createBookingdetails(userId,date,schoolName,booksPerformed)
    {
        const createBookingdetails = new ThirdTermBookingModel({userId,date,schoolName,booksPerformed});
        return await createBookingdetails.save();
    }
    static async getBookingDetails(userId)
    {
        const bookingData = await ThirdTermBookingModel.find({userId});
        return bookingData;
    }
static async deleteBookingDetails(id)
{
    const deleted = await ThirdTermBookingModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = ThirdTermBookingServices;