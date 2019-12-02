const Task = require('../models/Task');

module.exports = {

  find: function(params, cb) {
	Task.find(params, function(err, tasks) {
	  if (err) {
		cb(err, null);
		return;
	  }
	  cb(null, tasks);
	});
  },

  findById: function(params, cb) {
	Task.find(id, function(err, task) {
	  if (err) {
		cb(err, null);
		return;
	  }
	  cb(null, task);
	});
  },

  create: function(params, cb) {
	Task.create(params, function(err, task) {
	  if (err) {
		cb(err, null);
		return;
	  }
	  cb(null, task);
	});
  },
	
  update: function(id, params, cb) {
	Task.findByIdAndUpdate(id, params, { new: true }, function(err, task) {
	  if (err) {
		cb(err, null);
		return;
	  }
	  cb(null, task);
	});
  },

  delete: function(id, cb) {
	Task.findByIdAndRemove(id, function(err) {
	  if (err) {
		cb(err, null);
		return;
	  }
	  cb(null, null);
	});
  }

}


