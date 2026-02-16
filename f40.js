// promises

// function f1(){
//     console.log("This is F1 function")
// }


// function f2(){
//     console.log("This is F2 function")
// }
// f2()
// f1()

// setTimeout(()=>{console.log("Hello")},1000)



function makePayment(){
    setTimeout(()=>{console.log("Payment has been processed")},1000)

}
function sendConfirmation(){
    console.log("Order has been successful")

}
makePayment()
sendConfirmation()