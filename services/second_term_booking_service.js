const SecondTermBookingModel = require('../model/second_term_booking_model');
class SecondTermBookingServices{
    static async createBookingdetails(userId,date,schoolName,booksPerformed)
    {
        const createBookingdetails = new SecondTermBookingModel({userId,date,schoolName,booksPerformed});
        return await createBookingdetails.save();
    }
    static async getBookingDetails(userId)
    {
        const bookingData = await SecondTermBookingModel.find({userId});
        return bookingData;
    }
static async deleteBookingDetails(id)
{
    const deleted = await SecondTermBookingModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = SecondTermBookingServices;