// let arr1=[1,2,3,4,5]

// function secsmallnum(arr){
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=i+1;j<arr.length;j++)
//         {
//         if(arr[i]>arr[j])
//         {
//             temp=a[j]
//             a[i]=a[j]
//             a[j]=temp
//           }
//         }
//     }
//     return arr[1] 
// }
// console.log(secsmallnum(arr1))


let arr=[1,2,3,4,5]
let max=arr[0]
let min=arr[0]
function maxmin(arr){
 for(let i=1;i<arr.length;i++){ 
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){ar
        max=arr[i]
    }
}
    console.log(max)
    console.log(min)

 }
 maxmin(arr)