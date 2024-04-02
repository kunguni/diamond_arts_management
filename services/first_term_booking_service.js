const FirstTermBookingModel = require('../model/first_term_booking_model');
class FirstTermBookingServices{
    static async createBookingdetails(userId,date,schoolName,booksPerformed)
    {
        const createBookingdetails = new FirstTermBookingModel({userId,date,schoolName,booksPerformed});
        return await createBookingdetails.save();
    }
    static async getBookingDetails(userId)
    {
        const bookingData = await FirstTermBookingModel.find({userId});
        return bookingData;
    }
static async deleteBookingDetails(id)
{
    const deleted = await FirstTermBookingModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = FirstTermBookingServices;