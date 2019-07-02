var startTime = Date.now();

var db = connect("company")
var rs = db.randomInfo.find({userName: '7xw8y3'});

rs.forEach( rs => {printjson(rs)})

// 查看索引 db.randomInfo.getIndexes()
// 建立索引 db.randomInfo.ensureIndex({field: 1});

var endTime = Date.now() - startTime;
print("[demo]: endTime=" + endTime + 'ms')