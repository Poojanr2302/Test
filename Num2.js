let arr1=[5,4,3,9,6,2]

function secsmallnum(arr)
{
    for(let i=0;i<arr.length;i++)
    {
     for(let j=i+1;j<arr.length;j++)
        {
        if(arr[i]<arr[j])
        {
     let temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
         }
    }
}
return arr[1]
}
console.log(secsmallnum(arr1))