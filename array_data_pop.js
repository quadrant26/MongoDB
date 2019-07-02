var db = connect('company')
// error 
// db.workmate.update({name: 'hanmeimei'},{ sex: 1})
// success
// var workmate3 = {
//     name: 'hanmeimei',
//     age: '26',
//     sex: 0,
//     job: 'UI',
//     skill: {
//         skillOne: 'photoshop',
//         skillTwo: 'AI',
//         skillThree: 'PPT'
//     },
//     regeditTime: Date.now()
// }
// db.workmate.update(workmate3)

// $set 修改一个指定的键值(key)
// db.workmate.update({"name": "hanmeimei"}, {"$set": {sex:0, age:20}})
// db.workmate.update({"name": "hanmeimei"}, {$set: {"skill.skillThree":"word"}})

// $unset t用于将key删除
// db.workmate.update({"name": "hanmeimei"}, {$unset: {age: ""}})
// db.workmate.update({"name": "hanmeimei"}, {$set: {age: 20}})

// $inc 对数字进行计算
// db.workmate.update({"name": "hanmeimei"}, {$inc: {age: -2}})

// multi 
// {multi: false} 
// multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）
// db.workmate.update({}, {$set: {interset: []}}, {multi: true})

// upsert
// {upsert: true} 有不添加(默认值)
// db.workmate.update({"name": "xiaowang"}, {$set: {age: 20}}, {upsert: true})

// $push 追加数组/内嵌文档值
// db.workmate.update({"name": "xiaowang"}, {$push: {interset: 'draw'}})
// db.workmate.update({"name": "hanmeimei"}, {$push: {"skill.skillFour": 'draw'}})

// $ne 查找是否存在
// 检查一个值是否存在，如果不存在再执行操作，存在就不执行
// db.workmate.update({"name": "xiaowang", interset: {$ne: 'playGame'}}, {$push: {interset: 'Game'}})
// db.workmate.update({"name": "xiaowang", interset: {$ne: 'Game'}}, {$push: {interset: 'playGame'}})


// $addToSet
// 它是$ne的升级版本（查找是否存在，不存在就push上去）
db.workmate.update({"name": "xiaowang"}, {$addToSet: {interset: 'readBook'}})

// $each 批量
var newInterset = ["Sing", "Dance", "Code"];
// db.workmate.update({"name": "xiaowang"}, {$each: {interset: newInterset}})
db.workmate.update({"name": "xiaowang"}, {$addToSet: {interset:{$each: newInterset}}})

// $pop 1 从末端进行删除 -1 开始位置进行删除
db.workmate.update({"name": "xiaowang"}, {$pop: {interset: 1}})

// 定位修改
// interset.2 下表从0开始
db.workmate.update({"name": "xiaowang"}, {$set: {"interset.2": "Code"}})










print('[Update] The data was update successfully')