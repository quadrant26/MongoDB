// Mongo 备份
/*
mongodump
    --host 127.0.0.1
    --port 27017
    --out D:/databack/backup
    --collection myCollections
    --db test
    --username username
    --password password
*/

// mongodump --host 127.0.0.1 --port 27017 --out E:/databack/backup 


// Mongo 恢复
/*
mongorestore
    --host 127.0.0.1
    --port 27017
    --username username
    --password password
    <path to the backup>
*/

// mongorestore --host 127.0.0.1 --port 27017 E:/databack/backup