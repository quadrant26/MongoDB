var userName = "kang";
var timeStamp = Date.parse(new Date());
var jsonDatabase = {"username": userName, "loginTime": timeStamp}
var db = connect('log'); // 连接log == use log
db.login.insert(jsonDatabase);

print('[demo]: log print success');
// mongo 指定 js 文件
// mongo goTask.js