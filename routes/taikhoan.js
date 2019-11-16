// route for user here

var express = require('express');
var userRouter = express.Router();

//MẶC ĐỊNH ROUTE ĐÃ LÀ /taikhoan RỒI

userRouter.get('/', function(req, res, next) {
    console.log('Enter router taikhoan');
    res.render('taikhoan/quanlytaikhoan');
});

userRouter.get('/themtaikhoan', function(req, res, next) {
    console.log('Enter thêm tài khoản');
    res.render('taikhoan/themtaikhoan');
});

module.exports = userRouter;