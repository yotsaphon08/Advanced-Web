//โหลดโมดูล express จากนั้นเก็บผลลัพธ:ลงในตัวแปร expressFunction
const expressFunction = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/university';
const config = {
 autoIndex: true,
 useNewUrlParser: true,
 useUnifiedTopology: true
};
var Schema = require("mongoose").Schema;
const userSchema = Schema({
 stdid: String,
 name: String,
}, {
 collection: 'students'
});
let Students
try {
 Students = mongoose.model('students')
} catch (error) {
 Students = mongoose.model('students', userSchema);
}
//เรียกฟLงก:ชัน expressFunction() ซึ่งผลลัพธ:จะไดUกลับมาเปVนออบเจ็กต: แลUวนำไปเก็บยังตัวแปร express
const expressApp = expressFunction();
expressApp.use(function (req, res, next) {
 // Website you wish to allow to connect
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
 // Pass to next layer of middleware
 next();
});
expressApp.use(expressFunction.json());
expressApp.use((req, res, next) =>{
 mongoose.connect(url, config)
 .then(() => {
 console.log('Connected to MongoDB...');
 next();
 })
 .catch(err =>{
 console.log('Cannot connect to MongoDB');
 res.status(501).send('Cannot connect to MongoDB')
 });
})
//เรียกใชUเมธอด get เพื่อตรวจสอบพาธที่ส]งมาพรUอมกับ HTTP Request โดยกำหนด Endpoint
expressApp.get('/api/resource', function(req, res){
 Students.findOne({id:"B6218294"},(err, data) => {
 res.send(data)
 });
});
//สร$าง Event Listener รอการเชื่อมต9อผ9านจากพอร>ต 3000
expressApp.listen(3000, function(){
 console.log('Listening on port 3000');
});
