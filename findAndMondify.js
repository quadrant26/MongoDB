var db = connect('company')
// update 非应答式操作

// db.db.runCommand()
// db.workmate.update({"sex": 1}, {$set: {money: 1000}}, false, true);
// false：第一句末尾的false是upsert的简写，代表没有此条数据时不增加;
// true：true是multi的简写，代表修改所有，这两个我们在前边课程已经学过。
// db.listCommands 查看所有方法
// var resultMessage = db.db.runCommand({getLastError: 1})
// getLastError:1 :表示返回功能错误
// printjson(resultMessage)
// printjson：表示以json对象的格式输出到控制台。

// 查看是否和数据库链接成功
// db.runCommand({ping:1})

// findAndModify
var myModify = {
    findAndModify: 'workmate',
    query: {name: 'kang'},
    update: {$set: {age: 28}},
    new: true
}

var resultMessage = db.runCommand(myModify);
printjson(resultMessage)

/**
findAndModify属性值：

    query：需要查询的条件/文档
    sort: 进行排序
    remove：[boolean]是否删除查找到的文档，值填写true，可以删除。
    update: 需要更新的内容（和remove 只能存在一个）
    new:[boolean]返回更新前的文档还是更新后的文档。
    fields：需要返回的字段
    upsert：没有这个值是否增加。
 */