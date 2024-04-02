const FirstTermCastDetailsModel = require('../model/first_term_cast_model');
class FirstTermCastServices{
    static async createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber)
    {
        const createCastdetails = new FirstTermCastDetailsModel({userId,name,idNumber,position,salary,contract,phoneNumber});
        return await createCastdetails.save();
    }
    static async getCastDetails(userId)
    {
        const castData = await FirstTermCastDetailsModel.find({userId});
        return castData;
    }
    static async updateCastDetails( userId, name, idNumber, position, salary, contract, phoneNumber) {
        const updatedCastDetails = {
          userId,
          name,
          idNumber,
          position,
          salary,
          contract,
          phoneNumber,
        };
    
        return await FirstTermCastDetailsModel.findOneAndUpdate(
          { _id: id },
          { $set: updatedCastDetails },
          { new: true }
        );
      }
static async deleteCastDetails(id)
{
    const deleted = await FirstTermCastDetailsModel.findOneAndDelete({_id:id})
    return deleted;
}
}

    module.exports = FirstTermCastServices;