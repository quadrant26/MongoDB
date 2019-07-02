var db = connect("company")
// 生成一个随机数
function GetRandomNum(min, max){
    let range = max - min;
    let rand = Math.random();

    return (min+Math.round( rand*range ))
}

// 生成随机名字
function getRandomUserName (min, max){
    let tempStringArray = '123456789qwertyuiopasdfghjklzxcvbnm'.split("");
    let outPuttext = "";
    for( let i = 1; i < GetRandomNum(min, max); i++){
        outPuttext = outPuttext + tempStringArray[GetRandomNum (0, tempStringArray.length)]
    }
    return outPuttext;
}

// 200w
var startTime = Date.now();
db.randomInfo.drop();
var tempInfo = [];
for(let i = 0; i < 2000000; i++){
    tempInfo.push({
        userName: getRandomUserName (7, 16),
        regediteTime: new Date(),
        randNum0: GetRandomNum(100000, 999999),
        randNum1: GetRandomNum(100000, 999999),
        randNum2: GetRandomNum(100000, 999999),
        randNum3: GetRandomNum(100000, 999999),
        randNum4: GetRandomNum(100000, 999999),
        randNum5: GetRandomNum(100000, 999999),
        randNum6: GetRandomNum(100000, 999999),
        randNum7: GetRandomNum(100000, 999999),
        randNum8: GetRandomNum(100000, 999999),
        randNum9: GetRandomNum(100000, 999999)
    });
}

// db.randomInfo.stats();

db.randomInfo.insert(tempInfo);
var endTime = Date.now() - startTime;
print("[demo]: The data was inserted successfully. endTime=" + endTime + 'ms')