const SecondTermShowsManagementModel = require('../model/second_term_show_management_model');
class SecondTermShowsManagementServices{
    static async createPerformedShowdetails(userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses)
    {
        const createPerformedShowdetails = new SecondTermShowsManagementModel({userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses});
        return await createPerformedShowdetails.save();
    }
    static async getPerformedShowDetails(userId)
    {
        const performedShowData = await SecondTermShowsManagementModel.find({userId});
        return performedShowData;
    }
static async deletePerformedShowDetails(id)
{
    const deleted = await SecondTermShowsManagementModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = SecondTermShowsManagementServices;