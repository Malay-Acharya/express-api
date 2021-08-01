const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/students",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log("Connection successful");
}).catch((e) =>{
    console.log("No connection");
});


