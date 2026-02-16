// numbers =[5,6,7,8]
// numbers.forEach((number,) =>{
//     console.log(number)

// })

// numbers.map(()=>{})  
// // Creates a new array by modifying every element.

// numbers.filter(()=>{})
// // Creates a new array with elements that pass a condition.


// numbers.find(()=>{})
// // Returns first matching element only.
// numbers.reduce(()=>{})
// // Reduces entire array into one final value



// let marks=[70,65,32,56]
// const result=marks.some((mark)=>{
//     return mark>50
// })
// if(result) console.log("pass")
//     else console.log("Fail")

// const result =numbers.every((number)=>{
//     return number>2
// })
// console.log(result)

let marks=[70,65,32,56]
const result=marks.every((mark)=>{
    return mark>50
})
if(result) console.log("pass")
    else console.log("Fail")