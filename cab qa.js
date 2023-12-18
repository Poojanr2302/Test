// // callapplybind
// let Person={
//     full_name:function(){
//         return this.fname+''+this.lname
//     }
// }
// let Person1={
//     fname:'Pooja',
//     lname:'N R',
// }
// let Person2={
//     fname:'Pooja',
//     lname:'N R',
// }
// let out=Person.full_name.call(Person1)
// console.log(Person1)

let Person={
    full_name:function(age){
        return this.fname+''+this.lname
    }
}
let Person1={
    fname:'Pooja',
    lname:'N R',
}
let Person2={
    fname:'Pooja',
    lname:'N R',
}
let out=Person.full_name.apply(Person[22])
console.log(Person)