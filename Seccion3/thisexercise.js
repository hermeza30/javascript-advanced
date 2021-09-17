var b = {
    name: 'jay',
    say() {console.log(this)}//obj
  }
  
  var c = {
    name: 'jay',
    say() {return function() {
        console.log(this)//Windows Object
    }}
  }

  
  var d = {
    name: 'jay',
    say() {return () => console.log(this)}//Objeto
  }