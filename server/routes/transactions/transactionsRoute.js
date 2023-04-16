const express = require('express');
const {createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionCtrl,
    deleteTransactionCtrl,
    updateTransactionCtrl,} = require("../../controllers/transactions/transactionsCtrl")
const transactionsRoute = express.Router();
const isLogin = require("../../middlewares/isLogin")
//Post/api/v1/transaction
transactionsRoute.post('/',isLogin,  createTransactionCtrl);

//GET/api/v1/transaction
transactionsRoute.get('/', getTransactionsCtrl);

//GET/api/v1/transaction/:id
transactionsRoute.get('/:id', getTransactionCtrl);

//DELETE/api/v1/transaction
transactionsRoute.delete('/:id', deleteTransactionCtrl);

//UPDATE put/api/v1/transaction
transactionsRoute.put('/:id',  updateTransactionCtrl);

module.exports = transactionsRoute ;