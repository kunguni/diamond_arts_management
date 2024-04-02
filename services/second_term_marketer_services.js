const SecondTermMarketerDetailsModel = require('../model/second_term_marketer_model');
class SecondTermMarketerServices{
    static async createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber)
    {
        const createMarketerdetails = new SecondTermMarketerDetailsModel({userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber});
        return await createMarketerdetails.save();
    }
    static async getSecondTermMarketerDetails(userId)
    {
        const marketerData = await SecondTermMarketerDetailsModel.find({userId});
        return marketerData;
    }
static async deleteSecondTermMarketingDetails(id)
{
    const deleted = await SecondTermMarketerDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = SecondTermMarketerServices;