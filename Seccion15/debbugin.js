const flattened=[[0,1],[2,3],[4,5]].reduce((a,b)=>{
    console.log("Acumulador",a)
    console.log("array",b)
  
     return   a.concat(b,[])
    
},[])