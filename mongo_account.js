// Mongo 用户管理
// 创建用户
db.createUser({
    user: 'kang',
    pwd: '123456',
    customData: {
        name: 'king',
        email: '1234@qq.com',
        age: 19
    },
    roles: [
        {
            role: 'readWrite',
            db: 'company'
        },
        'read'
    ] 
})

// 权限设置 roles
// 查找用户信息 db.system.users.find()
// 删除用户信息 db.system.users.remove({user:"jspang"})
// 建权 db.auth("jspang","123456")
// 启动建权 mongod --auth
// 登录 mongom  -u kang -p 123456 127.0.0.1:27017/admin