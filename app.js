var express = require('express');
var app = express();
const userRoute = require('./routes/taikhoan');
const roomRoute = require('./routes/phong');
const csvcRoute = require('./routes/csvc');
const loiRoute = require('./routes/loi');
const trangthaiRoute = require('./routes/trangthai');
var database = require('./my_modules/db');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
// Thư mục views nằm cùng cấp với file app.js
app.set('views', './views');
app.use(express.static('public'));

//NẠP CÁC ROUTER TRONG THƯ MỤC ROUTES
// Dùng userRoute cho tất cả các route bắt đầu bằng '/taikhoan'
app.use('/taikhoan', userRoute);
// Dùng roomRoute cho tất cả các route bắt đầu bằng '/phong'
app.use('/phong', roomRoute);
// Dùng csvcRoute cho tất cả các route bắt đầu bằng '/csvc'
app.use('/csvc', csvcRoute);
// Dùng loiRoute cho tất cả các route bắt đầu bằng '/loi'
app.use('/loi', loiRoute);
// Dùng trangthaiRoute cho tất cả các route bắt đầu bằng '/trangthai'
app.use('/trangthai', trangthaiRoute);
// Dùng firebaseRouter cho tất cả các route bắt đầu bằng '/db'

app.get('/', (req, res) => {
    console.log("Home ");
    res.render('pages/index');
})

app.get('/about', (req, res) => {
    res.render('pages/about');
})

app.listen(4000, function(req, res) {
    console.log("server is running");
});