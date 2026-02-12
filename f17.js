// const products =["product1","product2","product3"]
// for(let i=1;i<products.length;i++){
//     console.log(products[i])
// }


// const products = ["product1", "product2", "product3"]

// products.forEach((product, index) => {
//     if (index >= 1) {
//         console.log(product)
//     }
// })

// function controller(f){
//     console.groupCollapsed(f)
// }
// controller(10)

// const a=10
// const name="jaem"
// controller(() => console.log("Hello"))

// let b=2
// let name="james"
// const f1=() => console.log("hi")
// f1()

// function greet(){
//     console.log("hello")
// } 
// // greet()

// // const f1=()=>console.log("Hello")
// // f1()

// const f1=()=>greet()
// f1()

// function greet(f){
//     f()
// }
// greet(() => console.log("hi"))
const products=[{id:1,name:"product1",desc:"hhee",price:10},
    {id:2,name:"product2",desc:"hhee",price:30},
    {id:3,name:"product3",desc:"hhee",price:40}

]



const cart=[]
// products.forEach((a)=>{
//     console.log(a)
// })


// : Push Using forEach
// method 1
// const cart=[...products]
// console.log(cart)


// method 2
products.forEach((product) => {
    product.quantity=1
    product.total=product.price*product.quantity

    cart.push(product)
})

console.log(cart)
