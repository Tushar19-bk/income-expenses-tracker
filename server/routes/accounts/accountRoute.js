const express = require("express");
const {createAccountCtrl,
    getAccountCtrl,
    deleteAccountCtrl,
    updateAccountCtrl,
    getAccountsCtrl,}= require("../../controllers/accounts/accountsCtrl");
const isLogin = require("../../middlewares/isLogin");
const accountRoute = express.Router();
 
//post/api/v1/accounts
accountRoute.post('/', isLogin,createAccountCtrl);

//GET/api/v1/accounts/:id
accountRoute.get('/:id',  getAccountCtrl);
//Delete/api/v1/accounts
accountRoute.delete("/:id", deleteAccountCtrl);
//put/api/v1/accounts
accountRoute.put('/:id',  updateAccountCtrl);

//post/api/v1/accounts
accountRoute.get('/', getAccountsCtrl);

module.exports = accountRoute;