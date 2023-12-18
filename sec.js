let arr1=[1,2,3,4,5,6,7,8,9]

function secsmallnum(arr){
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                let temp=a[i]
                arr[j]=arr[i]
                temp=arr[j]
            }
        }
    }
    return arr[1]
}
console.log(secsmallnum(arr1))