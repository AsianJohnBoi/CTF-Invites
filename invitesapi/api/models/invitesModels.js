'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  // name: {
  //   type: String,
  //   required: 'Give me a name'
  // },
  Code: {
    type: String,
    default: 'FLAG{}' //Here's the FLAG
  },
  Format: {
    type: String,
    default: 'encoded'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed', 'success']
    }],
    default: ['success']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
