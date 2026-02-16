const products=[{id:1,name:"product1",desc:"hhee",price:10},
    {id:2,name:"product2",desc:"hhee",price:30},
    {id:3,name:"product3",desc:"hhee",price:40}

]
let cart=[]
// products.forEach((product) => {

//     const obj={
//     ...products,
//     quantit:1,
//     total:products.price*product.quantity,

// }
//     cart=[...cart,product]
// })

// console.log(cart)



products.map((product)=>{
    const obj={
    ...products,
    quantity:1,
}
    cart=[...cart,obj]
})
console.log(cart)



// products.map((product)=>{
//     const obj={
//     ...products,
//     quantity:1,
// }
//     cart=[...cart,obj]
// })
// console.log(cart)