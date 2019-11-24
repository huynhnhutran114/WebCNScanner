// route for room here

var express = require('express');
var roomRouter = express.Router();

//MẶC ĐỊNH ROUTE ĐÃ LÀ /phong RỒI

roomRouter.get('/', function(req, res, next) {
    console.log('Enter router phong');
    res.render('phong/quanlyphong');
});

roomRouter.get('/themphong', function(req, res, next) {
    console.log('Enter thêm phòng');
    res.render('phong/themphong');
});

roomRouter.get('/test', function(req, res, next) {
    console.log('Enter router firebase');

});

module.exports = roomRouter;