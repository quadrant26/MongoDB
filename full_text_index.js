db.info.insert({contextInfo:"I am a programmer, I love life, love family. Every day after work, I write a diary."})
db.info.insert({contextInfo:"I am a programmer, I love PlayGame, love drink. Every day after work, I playGame and drink."})

// 建立全文索引
db.info.ensureIndex({contextInfo: 'text'})

// 全文索引查找
// $text:表示要在全文索引中查东西。
// $search:后边跟查找的内容。
// db.info.find({$text:{$search:"programmer"}})

// 查找多个词
db.info.find({$text:{$search:"programmer family diary drink"}})
// 使用“-”减号来取消
db.info.find({$text:{$search:"programmer family diary -drink"}})

// 转义 
db.info.find({$text:{$search:"\"love PlayGame\" drink"}})