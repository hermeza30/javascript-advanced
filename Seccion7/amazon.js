const user ={
    name:'kim',
    active:true,
    cart:[],
    purchases:[],
}

var compose=(f,g)=>(...data)=>f(g(...data));
function suma(ac,act){
    debugger
    return ac+act;
}


function purchaseItem(...fn){
  return fn.reduce(compose)
}
function addItemToCard(user){
    const updateCart=user.cart.concat(item);
    return Object.assign({},user,{cart:updateCart})
}
function applyTaxToItems(user){
    const {cart}=user;
    const taxRate=1.3;
    const updatedCart=cart.map(item=>{
        return {
            name:item.name,
            price:item.price*taxRate
        }
    })
    return Object.assign({},user,{cart:updatedCart})

}
function buyItem(){
    return Object.assign({},user,{purchases:user.cart});
}
function emptyCart(){
 return Object.assign({},user,{cart:[]})
}

purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCard,
)(user,{name:'laptop',price:344})