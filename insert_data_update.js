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
db.workmate.update({"name": "xiaowang"}, {$set: {age: 20}}, {upsert: true})

print('[Update] The data was update successfully')