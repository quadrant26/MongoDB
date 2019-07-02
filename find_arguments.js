var db = connect("company")

// 参数 db.workmate.find
// query, fields, limit, skip, batchSize, options
/**
 * query：这个就是查询条件，MongoDB默认的第一个参数。
    fields：（返回内容）查询出来后显示的结果样式，可以用true和false控制是否显示。
    limit：返回的数量，后边跟数字，控制每次查询返回的结果数量。
    skip:跳过多少个显示，和limit结合可以实现分页。
    batchSize || sort：排序方式，从小到大排序使用1，从大到小排序使用-1。
 */

// 分页 显示2 年龄从小到大
db.workmate.find(
    {},
    { name: 1, age: 1, _id:0}
).limit(2).skip(0).sort({age: 1})

// $where修饰符
// 尽量不用
db.workmate.find(
    {$where:"this.age>30"},
    {name:true,age:true,_id:false}
)