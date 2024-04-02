const SecondTermCastDetailsModel = require('../model/second_term_cast_model');
class SecondTermCastServices{
    static async createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber)
    {
        const createCastdetails = new SecondTermCastDetailsModel({userId,name,idNumber,position,salary,contract,phoneNumber});
        return await createCastdetails.save();
    }
    static async getCastDetails(userId)
    {
        const castData = await SecondTermCastDetailsModel.find({userId});
        return castData;
    }
static async deleteCastDetails(id)
{
    const deleted = await SecondTermCastDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = SecondTermCastServices;