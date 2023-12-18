// let Person={
//     full_name:function(age,team){
//         return this.fname+''+this.lname + 'age:' +age + 'team:' + team
//  }
// }
// let Person1={
//     fname:'Sachin',
//     lname:'Tendulkar'
// }
// let Person2={
//     fname:'Virat',
//     lname:'Kholi'
// }
// let out=Person.full_name.apply(Person2, [32,'Banglore'])
// console.log(out)
let Person={
    fname:'Virat',
    lname:'Kholi',
    full_name:function(){
        console.log(this.fname + ' '+ this .lname)
    }
}
let x=Person.full_name.bind(Person)
setTimeout(x,3000)

