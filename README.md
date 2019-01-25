##creating a controller
add file with following code inside `controllers/` eg. employee.js
```
const express = require('express');
const router = express.Router();

\*
Actual code goes here
router.`method`('/`routepath`', `callback`);
*/

module.exports = router;
```

in router.js include the controller and mention the first path route as follows
```
const employee = require('./controllers/employee');
module.exports = function(route) {
    route.use('/employee', employee);
});
```

##Creating a model for Mongo
add file with following code inside `models/` eg. Employee.js

```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const `Model`Schema = new Schema({
    // All fields goes here
});

module.exports = `Model` = mongoose.model('`model`', `Model`Schema);
```