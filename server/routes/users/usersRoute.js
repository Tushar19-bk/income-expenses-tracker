const express = require('express');
 
const { 
    registerUserCtrl,
    loginUserCtrl,
    profileUserCtrl,
    deleteUserCtrl,
    updateUserCtrl } = require('../../controllers/users/usersCtrl');
const isLogin = require('../../middlewares/isLogin');
 

const usersRoute = express.Router();

// Post// api /v1/users/register
usersRoute.post("/register", registerUserCtrl);
// Post// api /v1/users/login 
usersRoute.post('/login',  loginUserCtrl);

//GET/api/v1/users/profile/
usersRoute.get('/profile/', isLogin , profileUserCtrl);

//DELETE/api/v1/users/profile/:id
usersRoute.delete('/',isLogin,  deleteUserCtrl);
//put/api/v1/users/:id
usersRoute.put('/',isLogin , updateUserCtrl);


module.exports =  usersRoute ;
 