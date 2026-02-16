// const student={
//     name:'John',
//     age:20
// };
// const {name,age}=student
// console.log(name,age)

// const {n1,n2}=student
// console.log(n1)
// console.log(n2)
// const student={
//     name:'John',
//     age:20,
//     city:'jalandhar',
// };
// const {city='Amritsar'}=student
// console.log(city)

const student={
    name:'John',
    age:20,
    marks:{
        math:60,
        science:34
    }
};
const {marks:{math}}=student
console.log(math)