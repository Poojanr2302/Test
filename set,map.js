// let X=[1,2,3,4,5,6,8,6]

// let Set_X=new Set(X)

// console.log(Set_X)

// Set_X.add(25)
// Set_X.delete(23)
// Set_X,has(5)


// let team_a=['india','aus','jap','chin']
// let team_b=['uk','usa','can']

// let team_union=[...team_a,...team_b]
// console.log(team_union)


// intersection
let team_a=['india','aus','jap','chin','uk','usa']
let team_b=['uk','usa','can','chl','aus','india']

// let team_union=[...team_a,...team_b]

let Team_A =new Set(team_a)
let Team_B =new Set(team_b)

let a_intersection_b=team_a.filter(el=>team_b.includes(el))
console.log(a_intersection_b)

