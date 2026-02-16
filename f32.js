const nums=[1,2,3,4,5]
// let n1=nums[0]
// let n2=nums[1]
// console.log(n1)
// console.log(n2)
// ECMAScript
// const [n1,n2] = nums
// console.log(n1)
// console.log(n2)
// rest operator
// const [n1,n2,...n3] = nums
// console.log(n1,n2)
// console.log(n3)
// skip values
// const [n1,,n2] = nums
// console.log(n1)
// console.log(n2)
// default values
const [n1,n2,n3=10] = [12,15,20]
console.log(n2)
console.log(n1)
console.log(n3)
