'use strict';
module.exports = function(app) {
  var invites = require('../controllers/invitesController');

  app.route('/')
    .post(invites.create_a_task);

  // invites Routes
  // app.route('/tasks')
  //   // .get(invites.list_all_tasks)
  //   .post(invites.create_a_task);


  // app.route('/tasks/:taskId')
  //   .get(invites.read_a_task)
  //   .put(invites.update_a_task)
  //   .delete(invites.delete_a_task);
};