const express = require('express');
const app = express();


// Import routes
const blogRoute = require('./routes/blog.js');


//Router MIddlewares
app.use(express.json());
app.use('/', blogRoute);

app.listen(4000,()=>{
    console.log("4000 port is running");
})
module.exports = app;
