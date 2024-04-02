const firstTermCastServices = require('../services/first_term_cast_services');
const FirstTermCastModel = require('../model/first_term_cast_model');
exports.createCastdetails = async (req,res,next)=>
{
    try {
        const {userId,name,idNumber,position,salary,contract,phoneNumber}=req.body;
       let  castdetails = await firstTermCastServices.createCastdetails(userId,name,idNumber,position,salary,contract,phoneNumber);
       res.json({status:true,success:"Cast Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}

exports.getCastDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let firsttermcastdetails = await firstTermCastServices.getCastDetails(userId);
    res.json({status:true,success:firsttermcastdetails});
    }catch(error)
    {
        throw error;
    }
}
exports.updateCastDetails = async (req, res, next) => {
    try {
      const {
        userId,
        name,
        idNumber,
        position,
        salary,
        contract,
        phoneNumber,
      } = req.body;
      let updatedCastDetails = await firstTermCastServices.updateCastDetails(
        userId,
        name,
        idNumber,
        position,
        salary,
        contract,
        phoneNumber
      );
  
      res.json({ status: true, success: updatedCastDetails });
    } catch (error) {
      next(error);
    }
  };
exports.deleteCastDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await firstTermCastServices.deleteCastDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}

exports.restoreCastDetails = async(req,res,next)=>{
  const { userId, name, idNumber, position, salary, contract, phoneNumber } = req.body;

    try {
      // Create a filter to find the deleted cast member by user ID and ID number
      const filter = {
        userId: new mongodb.ObjectID(userId),name,
        idNumber,position,salary,contract,phoneNumber
      };
      // Find the deleted cast member
      const deletedCastMember = await FirstTermCastModel.collection.findOne(filter);

      if (!deletedCastMember) {
        // If the deleted cast member is not found, return an error
        return res.status(404).json({
          status: false,
          message: 'Deleted cast member not found.'
        });
      }

      // Remove the '_id' field from the deleted cast member (it's an ObjectID)
      delete deletedCastMember._id;

      // Add the 'userId' as a regular string (not an ObjectID)
      deletedCastMember.userId = userId;

      // Update the cast member with the original ID number
      const update = {
        $set: deletedCastMember
      };

      // Restore the deleted cast member
      const result = await FirstTermCastModel.collection.updateOne(filter, update, { upsert: false });

      if (result.modifiedCount > 0) {
        // If the cast member is successfully restored, return a success message
        return res.status(200).json({
          status: true,
          message: 'Cast member restored successfully.'
        });
      } else {
        // If the cast member is not found, return an error
        return res.status(404).json({
          status: false,
          message: 'Cast member not found.'
        });
      }
    } catch (error) {
      console.error(error);

      // If there's an error, return an error message
      return res.status(500).json({
        status: false,
        message: 'An error occurred while restoring the cast member.'
      });
    }
  }