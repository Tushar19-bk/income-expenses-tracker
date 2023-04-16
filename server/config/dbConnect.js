const mongoose = require("mongoose");

// connect 
const dbconnecte = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://tusharharinkhere0:Fu2uyb9Qo0WfGsni@income-expenses-tracker.0r9gz04.mongodb.net/income-expenses-app?retryWrites=true&w=majority");
        console.log("dbconnected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
dbconnecte();