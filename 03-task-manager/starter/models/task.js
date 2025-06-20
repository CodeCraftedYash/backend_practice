const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,['Please provide a name for the task']],
        trim: true,
        maxlength:[20, 'name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})