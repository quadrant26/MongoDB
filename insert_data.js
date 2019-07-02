var workmate1 = {
    name: 'kang',
    age: '30',
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'javascript',
        skillThree: 'python'
    },
    regeditTime: Date.now()
}
var workmate2 = {
    name: 'lilei',
    age: '40',
    sex: 1,
    job: '后台',
    skill: {
        skillOne: 'java',
        skillTwo: 'J2EE',
        skillThree: 'PPT'
    },
    regeditTime: Date.now()
}
var workmate3 = {
    name: 'hanmeimei',
    age: '26',
    sex: 1,
    job: 'UI',
    skill: {
        skillOne: 'photoshop',
        skillTwo: 'AI',
        skillThree: 'PPT'
    },
    regeditTime: Date.now()
}

var db = connect('company');
var workmateArrar = [workmate1, workmate2, workmate3];
db.workmate.insert(workmateArrar)

print("[SUCCESS] The data was inserted successfully!")