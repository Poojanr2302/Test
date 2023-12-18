// class Vehicle{
//     constructor(wheels){
//         this.wheels=wheels
//     }
// }
// class  Car extends Vehicle{
//     constructor(airbags){
//         super(4)
//         this.airbags=airbags
//     }
// }
// // let v1=new Vehicle(8)
// let c1=new Vehicle(4)
// console.log(c1.wheels)


class Father{
    constructor(bike){ 
        this.bike=bike

    }
    details(){
        console.log(this)
    }
}
class Son extends Father{
    constructor(car,bike){
        super(bike)
        this.car=car
    }
    }
    details(){
        console.log(`Son property details==>${this}`)
    }
        upgrade(){
            this.bike=new_bike
        }


// let F1=new Father('TVS')
// let S2=new Son('Honda','BMW')
// S2.details()
// S2.upgrade=('classic 350')
// S2.details()