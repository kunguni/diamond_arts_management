const ThirdTermMarketerDetailsModel = require('../model/third_term_marketer_model');
class ThirdTermMarketerServices{
    static async createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber)
    {
        const createMarketerdetails = new ThirdTermMarketerDetailsModel({userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber});
        return await createMarketerdetails.save();
    }
    static async getThirdTermMarketerDetails(userId)
    {
        const marketerData = await ThirdTermMarketerDetailsModel.find({userId});
        return marketerData;
    }
static async deleteThirdTermMarketingDetails(id)
{
    const deleted = await ThirdTermMarketerDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = ThirdTermMarketerServices;