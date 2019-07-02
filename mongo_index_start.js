var startTime = Date.now();

var db = connect("company")
// var rs = db.randomInfo.find({userName: '7xw8y3'});
// rs.forEach( rs => {printjson(rs)})

// 查看索引 db.randomInfo.getIndexes()
// 建立索引 db.randomInfo.ensureIndex({field: 1});
// db.randomInfo.ensureIndex({userName: 1})
// 复合索引 建立两条以上的索引
// db.randomInfo.ensureIndex({randNum0: 1})

// var rs = db.randomInfo.find({userName: '7xw8y3'});
// rs.forEach( rs => {printjson(rs)})

// 指定索引查询（hint）
var rs = db.randomInfo.find({userName:'7xwb8y3',randNum0:565509}).hint({randNum0:1});
rs.forEach( rs => {printjson(rs)})

// 删除索引
// randNum0_1 是getIndexes 返回的 name 值， 不是 key 值
// db.randomInfo.dropIndex('randNum0_1');//索引的唯一ID

var endTime = Date.now() - startTime;
print("[demo]: endTime=" + endTime + 'ms')