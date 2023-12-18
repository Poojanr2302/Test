// Virat_profile = {
//     first_name:'Virat',
//     last_name:'Kohli',
//     age:32,
//     team:'India',
//     skill:['Batting','Bowling','Fielding']
// }
// Virat_profile.height="5.8"
// // console.log(Virat_profile)
// // console.log(Object.keys(Virat_profile))
// console.log(Object.entries(Virat_profile))
let skills=['Batting','Bowling','Reading']

let copySkill=[...skills]

// let x=10
// let y=x

// x=200
// console.log(x,y)
skills.push('Reading')
console.log(copySkill)
console.log(skills)
