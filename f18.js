
cart =[...cart,product]

products.forEach((product) => {
    // product.quantity=1
    // product.total=product.price*product.quantity

    // cart.push(product)
    const obj={
    ...products,
    quantity:1,
    total:products.price*product.quantity,

}
    cart=[...cart,product]
})

console.log(cart)
