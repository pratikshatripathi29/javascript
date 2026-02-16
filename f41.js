function makePayment(f){
    setTimeout(()=>{console.log("Payment has been processed")},1000)
    f()


}
function sendConfirmation(){
    console.log("Order has been successful")

}
makePayment(sendConfirmation)
// sendConfirmation()