'use strict';
module.exports = function(app) {
  var invites = require('../controllers/invitesController');

  app.route('/')
    .post(invites.create_a_task);
};