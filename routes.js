const employee = require('./controllers/employee');
const login = require('./controllers/login');
const register = require('./controllers/register');

module.exports = function(route) {
    route.use('/employee', employee);
    route.use('/login', login);
    route.use('/register', register);
};