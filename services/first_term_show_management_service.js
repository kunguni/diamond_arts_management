const FirstTermShowsManagementModel = require('../model/first_term_show_management_model');
class FirstTermShowsManagementServices{
    static async createPerformedShowdetails(userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses)
    {
        const createPerformedShowdetails = new FirstTermShowsManagementModel({userId,marketerName,schoolName,schoolLocation,datePerformed,noOfStudents,booksPerformed,earnings,expenses});
        return await createPerformedShowdetails.save();
    }
    static async getPerformedShowDetails(userId)
    {
        const performedShowData = await FirstTermShowsManagementModel.find({userId});
        return performedShowData;
    }
static async deletePerformedShowDetails(id)
{
    const deleted = await FirstTermShowsManagementModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = FirstTermShowsManagementServices;