// 简单查找
var db = connect("company")

// 查找 第二个参数代表需要显示的字段
// db.workmate.find({"skill.skillOne": "HTML+CSS"})
// db.workmate.find({"skill.skillOne": "HTML+CSS"}, {name: true, "skill.skillOne": true, _id: 0})

// 不等修饰符
// 小于($lt):英文全称less-than
// 小于等于($lte)：英文全称less-than-equal
// 大于($gt):英文全称greater-than
// 大于等于($gte):英文全称greater-than-equal
// 不等于($ne):英文全称not-equal
// db.workmate.find(
//     {age:{$lte:30,$gte:25}},
//     {name:true,age:true,"skill.skillOne":true,_id:false}
// )

// 日期查找
// var startDate= new Date('01/01/2018');
// db.workmate.find(
//     {regeditTime:{$gt:startDate}},
//     {name:true,age:true,"skill.skillOne":true,_id:false}
// )

// $in 一个 key 多 value
// 查找年龄为25到33岁
db.workmate.find({"age": {$in: [25, 33]}}, {name: true, age: true, _id: 0, skill: 1})

// $nin 不包含的条件
db.workmate.find({"age": { $nin: [25, 33]}}, {name: true, age: 1, _id: 0})

// 多条件查询
// $or || 
// $or: []
db.workmate.find(
    {$or: [
        {age: {$gt: 30}}, 
        {'skill.skillThree': 'PHP'}
    ]}, 
    {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
)

// $and &&
db.workmate.find(
    {$and: [
        {age: {$gt: 30}}, 
        {'skill.skillThree': 'PHP'}
    ]}, 
    {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
)

// $not
db.workmate.find(
    {age: {
        $not: {
            $lt: 30,
            $gt: 20
        }
    }}, 
    {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
)