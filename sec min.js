let arr=[1,2,3,4,5,6,7]
let firstMin=arr[0]
let secondMin=Infinity
function secondMin(){
    for(arr[i]=1;i<arr.length;i++){
        if(arr[i]<firstMin){
            secondMin=firstMin
            firstMin=arr[i]
        }
        else if(a[i]<secondMin && arr[i]!=firstMin){
            secondMin=arr[i]
        }
    }
    return secondMin
}
console.log(secondMin(arr))