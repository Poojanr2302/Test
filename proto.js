const Person={
    name:'Pooja',
    age:22
};
const prototypeOfPerson=Object.getPrototypeOf(Person);
console.log(prototypeOfPerson===Object.prototype)
