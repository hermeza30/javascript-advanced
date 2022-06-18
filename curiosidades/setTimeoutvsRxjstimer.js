const { timer } = require("rxjs")
setTimeout(()=>{
    console.log("settimeout webapi")   
   },10)
   timer(10).subscribe(console.log("timer rxjs"))