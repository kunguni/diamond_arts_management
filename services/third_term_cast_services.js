const ThirdTermCastDetailsModel = require('../model/third_term_cast_model');
class ThirdTermCastServices{
    static async createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber)
    {
        const createCastdetails = new ThirdTermCastDetailsModel({userId,name,idNumber,position,salary,contract,phoneNumber});
        return await createCastdetails.save();
    }
    static async getCastDetails(userId)
    {
        const castData = await ThirdTermCastDetailsModel.find({userId});
        return castData;
    }
static async deleteCastDetails(id)
{
    const deleted = await ThirdTermCastDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = ThirdTermCastServices;