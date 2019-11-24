// route for trangthai here

var express = require('express');
var trangthaiRouter = express.Router();

//MẶC ĐỊNH ROUTE ĐÃ LÀ /taikhoan RỒI

trangthaiRouter.get('/', function(req, res, next) {
    console.log('Enter router trạng thái');
    res.render('trangthai/quanlytrangthai');
});

trangthaiRouter.get('/themtrangthai', function(req, res, next) {
    console.log('Enter thêm trạng thái');
    res.render('trangthai/themtrangthai');
});

module.exports = trangthaiRouter;