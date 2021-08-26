const users = require("./users/users.service.js");
const demoJobList = require('./demo_job_list/demo_job_list.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(demoJobList);
};
