const ProductionServices = require('../services/production_services');
exports.createPdetails = async (req,res,next)=>
{
    try {
        const {userId,productionName,locationCounty,packages}=req.body;
       let productiondetails = await ProductionServices.createPdetails(userId,productionName,locationCounty,packages);
       res.json({status:true,success:"Production Details Saved Successfully"});
      } catch (error) {
        next(error);
      }
}
exports.getProductionDetails = async (req,res,next)=>{
    try{
    const {userId} = req.body;
    let productiondetails = await ProductionServices.getProductionDetails(userId);
    res.json({status:true,success:productiondetails});
    }catch(error)
    {
        throw error;
    }
    
exports.deleteProductionDetails = async(req,res,next)=>{
    try{
     const{id} = req.body;
     let deleted = await ProductionServices.deleteProductionDetails(id);
     res.json({status:true,success:deleted});
    }catch(error){
        next(error);
    }
}
}
