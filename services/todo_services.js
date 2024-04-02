const ToDoModel = require('../model/todo_model');
class ToDoServices{
    static async createTodo(userId,title,desc)
    {
        const createTodo = new ToDoModel({userId,title,desc});
        return await createTodo.save();
    }
    static async getUserTodo(userId)
    {
        const todoData = await ToDoModel.find({userId});
        return todoData;
    }

    static async deleteTodo(id)
    {
        const deleted = await ToDoModel.findOneAndDelete({_id:id})
        return deleted;
    }
}
module.exports = ToDoServices;