module.exports = function(db){
    const mongoose = require("mongoose");
    mongoose.connect(`mongodb://localhost/${db}`,{
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
}
