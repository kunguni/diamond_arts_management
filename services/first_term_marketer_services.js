const marketerDetailsModel = require('../model/first_term_marketer_model');
class marketerServices{
    static async createMarketerdetails(userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber)
    {
        const createMarketerdetails = new marketerDetailsModel({userId,name,idNumber,location,marketerNumber,schoolsVisited,postersGiven,phoneNumber});
        return await createMarketerdetails.save();
    }
    static async getFirstTermMarketerDetails(userId)
    {
        const marketerData = await marketerDetailsModel.find({userId});
        return marketerData;
    }
static async deleteFirstTermMarketingDetails(id)
{
    const deleted = await marketerDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = marketerServices;