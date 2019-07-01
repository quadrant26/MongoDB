var startTime = Date.now();
var db = connect('log');

/**
// 循环插入数据
for ( let i = 0; i < 1000; i++){
    db.test.insert({"num": i})
}
*/

// 批量插入数据
var tempArray = [];
for(let i = 0; i < 1000; i++){
    tempArray.push({"num": i});
}
db.test.insert(tempArray);

// 花费时间
var runTime = Date.now() - startTime;
print('[batch processing] success, This run is '+ runTime +' ms')