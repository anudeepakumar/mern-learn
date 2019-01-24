const employee = require('./controllers/employee');

module.exports = function(route) {
    route.use('/employee', employee);
};