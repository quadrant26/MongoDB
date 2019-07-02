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
// db.workmate.find({"age": {$in: [25, 33]}}, {name: true, age: true, _id: 0, skill: 1})

// $nin 不包含的条件
// db.workmate.find({"age": { $nin: [25, 33]}}, {name: true, age: 1, _id: 0})

// 多条件查询
// $or || 
// $or: []
// db.workmate.find(
//     {$or: [
//         {age: {$gt: 30}}, 
//         {'skill.skillThree': 'PHP'}
//     ]}, 
//     {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
// )

// $and &&
// db.workmate.find(
//     {$and: [
//         {age: {$gt: 30}}, 
//         {'skill.skillThree': 'PHP'}
//     ]}, 
//     {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
// )

// $not
// db.workmate.find(
//     {age: {
//         $not: {
//             $lt: 30,
//             $gt: 20
//         }
//     }}, 
//     {name: true, age: 1, _id: 0, 'skill.skillThree': 1}
// )

// 数组查找
db.workmate.find(
    {interest: ['画画', '聚会', '看电影']}, 
    {name: 1, interest: 1, age: 1, _id: 0}
)
// 写了一个中括号([]),因为加上中括号就相当于完全匹配了，所以没有得到一条符合查询条件的数据
db.workmate.find(
    {interest: ['画画', '聚会', '看电影']}, 
    {name: 1, interest: 1, age: 1, _id: 0}
)

db.workmate.find(
    {interest: '画画'}, 
    {name: 1, interest: 1, age: 1, _id: 0}
)

// $all-数组多项查询 &&
db.workmate.find(
    {interest:{$all:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)

// $in-数组的或者查询 ||
db.workmate.find(
    {interest:{$in:["看电影","看书"]}},
    {name:1,interest:1,age:1,_id:0} 
)

// $size-数组个数查询
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0} 
)

// $slice-显示选项
// 前两项 slice:2
// 最后一项，可以直接使用slice:-1
db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0} 
)
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0} 
)