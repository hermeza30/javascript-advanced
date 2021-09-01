fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp=>resp.json())
    .then(console.log)

    async function fetchinging(){
        const rs=await fetch('https://jsonplaceholder.typicode.com/todos').then(res=>res.json())
        console.log(rs);
    }