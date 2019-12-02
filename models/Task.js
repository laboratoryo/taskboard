const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  text: { type: String },
  priority: { type: String, default: 'Normal' },
  status: { type: String },
  creator: { type: Schema.Types.ObjectId, ref: 'users' },
  assignee: { type: Schema.Types.ObjectId, ref: 'users' },
});

module.exports = mongoose.model('task', TaskSchema);



