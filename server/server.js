const express = require("express");
const globalErrHandler = require("./middlewares/globalErrHandler"); 
 const cors = require("cors");
 require("./config/dbConnect")
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");
 
const app = express();
 
//midleware 
app.use(express.json()) // passing income data  express not allow default income data
// corse middleware 
app.use(cors());
// routes 

//user routes 
app.use("/api/v1/users", usersRoute); 
 // acount creation route 
app.use("/api/v1/accounts", accountRoute );
// transaction post 
app.use("/api/v1/transactions", transactionsRoute);
// Error Handlear 
 app.use(globalErrHandler);


//  listen to server 
const PORT = process.env.Port || 9000;
app.listen(PORT, console.log(`Server is runing in port ${PORT} `));