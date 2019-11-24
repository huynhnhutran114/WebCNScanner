// route for user here

var express = require('express');
var database = require('../my_modules/db');
var userRouter = express.Router();

//MẶC ĐỊNH ROUTE ĐÃ LÀ /taikhoan RỒI

userRouter.get('/', async function(req, res, next) {
    console.log('Enter taikhoan');

    let users = await database.getAllUsers();
    let list = [];
    users.forEach(doc => {
        list.push(doc);
    });
    res.render('taikhoan/quanlytaikhoan', { userList: list, });
});

userRouter.get('/themtaikhoan', function(req, res, next) {
    console.log('Enter thêm tài khoản');

    res.render('taikhoan/themtaikhoan');
});

userRouter.get('/suataikhoan/:uid', async function(req, res, next) {
    console.log('Enter sửa tài khoản');
    let id = req.params.uid;
    id = id.slice(1, id.length);
    let u = await database.getUsers(id);

    let user;
    u.forEach(doc => {
        user = doc;
    });

    res.render('taikhoan/suataikhoan', { user: user });
});

module.exports = userRouter;