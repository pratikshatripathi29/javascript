// function f1(x){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(x%2==0){
//                 resolve(`${x}`);
//             } else{
//                 reject("odd");
//             }
//             // console.log(x);
//             // resolve();

//         },3000
//     );
//     });
// }
// async function main(){
//     let num=Math.ramdom()*10;
//     // await f1(5);
//     // console.log("Program completed");
//     try{
//         await f1( num);
//         console.log("heie")
//     }
//     catch(err){
//         console.log(err)
//     }

// }
// main()

function f1(x){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(x % 2 === 0){
                resolve(x);  // send even number
            } else {
                reject("odd numbers are not allowed");
            }
        }, 3000);
    });
}

async function main(){
    // let num = Math.floor(Math.random() * 10);  // generate integer
    let num = Math.round(Math.random() * 10);
    console.log("Generated number:", num);

    try{
        let result = await f1(num);
        console.log("Even number is:", result);
    }
    catch(err){
        console.log(err);
    }
}

main();