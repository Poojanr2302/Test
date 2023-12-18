// camelcase to snake case

let a='iAmPooja'

function cameltosnake(a)
{
    let out=a.split(/(?=([A-Z])/)
    let out1=[]
    console.log(out)
    for(i=0;i<out.length;i++)
    {
      out1.push(out[i].toLowerCase())
    }
    console.log(out1.join('_'))
}
camele

 c