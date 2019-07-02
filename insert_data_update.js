var db = connect('company')
// error 
// db.workmate.update({name: 'hanmeimei'},{ sex: 1})
// success
var workmate3 = {
    name: 'hanmeimei',
    age: '26',
    sex: 0,
    job: 'UI',
    skill: {
        skillOne: 'photoshop',
        skillTwo: 'AI',
        skillThree: 'PPT'
    },
    regeditTime: Date.now()
}
db.workmate.update(workmate3)
print('[Update] The data was update successfully')