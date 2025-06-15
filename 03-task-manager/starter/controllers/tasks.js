const getAllTasks = ( req,res ) => res.json({
        message: "✅ All tasks fetched successfully",
        tasks: [
            { id: 1, title: "Learn Express" },
            { id: 2, title: "Practice with Postman" }
        ]
    });
const createTask = ( req,res ) => {
    res.json(req.body,);
}
const getTask = ( req,res ) => {
    res.json({
        id:req.params.id
    });
}
const updateTask = ( req,res ) => {
    res.send('all items from the file');
}
const deleteTask = ( req,res ) => {
    res.send('all items from the file');
}


module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}