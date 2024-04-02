const ProductionModel = require('../model/production_model');
class ProductionServices{
    static async createPdetails(userId,productionName,locationCounty,packages,)
    {
        const createPdetails = new ProductionModel({userId,productionName,locationCounty,packages});
        return await createPdetails.save();
    }
    static async getProductionDetails(userId)
    {
        const productionData = await ProductionModel.find({userId});
        return productionData;
    }
    static async deleteProductionDetails(id)
{
    const deleted = await ProductionModel.findOneAndDelete({_id:id})
    return deleted;
}

}
    module.exports = ProductionServices;
   /* static async getUserTodo(userId)
    {
        const todoData = await ToDoModel.find({userId});
        return todoData;
    }

    static async deleteTodo(id)
    {
        const deleted = await ToDoModel.findOneAndDelete({_id:id})
        return deleted;
    }
}*/

  