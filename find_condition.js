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
db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)

var startDate= new Date('01/01/2018');
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,age:true,"skill.skillOne":true,_id:false}
)