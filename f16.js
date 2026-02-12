let cart = []
//Click on add to cart button on iphone product
cart = [...cart,{name:"iphone",price:45000,qty:1}]
// console.log(cart)
//Click on add to cart button on speaker product
cart = [...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)

const order = {
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"pending"
}
db.orders.insertOne(order)
mongosh
//Create flipcart database
// use flipcart

//create collection orders > email,items,orderValue,status,orderDate
db.orders.insertOne({
    email: "john@gmail.com",
    items: [
        { name: "iphone", price: 45000, qty: 1 },
        { name: "speaker", price: 1000, qty: 1 }
    ],
    orderValue: 46000,
    status: "pending",
    orderDate: new Date()
})

//create collectin users > name,email,password,role

db.users.insertMany([
    {
        name: "John",
        email: "john@gmail.com",
        password: "123456",
        role: "customer"
    },
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: "admin123",
        role: "admin"
    }
])
db.orders.find()
db.orders.find({ email: "john@gmail.com" })

//Insert seed data
//Write aggregate query to display all the orders
db.orders.aggregate([
    {
        $match: { email: "john@gmail.com" }
    }
])

//placed by a particular user

db.orders.find({ email: "john@gmail.com" })




db.orders.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "email",
            foreignField: "email",
            as: "userDetails"
        }
    },
    {
        $match: { email: "john@gmail.com" }
    }
])

