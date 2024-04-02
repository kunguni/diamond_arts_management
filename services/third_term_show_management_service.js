const ThirdTermShowsManagementModel = require('../model/third_term_show_management_model');
class ThirdTermShowsManagementServices{
    static async createPerformedShowdetails(userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses)
    {
        const createPerformedShowdetails = new ThirdTermShowsManagementModel({userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses});
        return await createPerformedShowdetails.save();
    }
    static async getPerformedShowDetails(userId)
    {
        const performedShowData = await ThirdTermShowsManagementModel.find({userId});
        return performedShowData;
    }
static async deletePerformedShowDetails(id)
{
    const deleted = await ThirdTermShowsManagementModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = ThirdTermShowsManagementServices;