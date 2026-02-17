function getStudentInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userObj = {
                name: "John",
                email: "john@gmail.com",
                age: 21
            };
            resolve(userObj);
        }, 2000);
    });
}

// Accept data as parameter
function displayInfo(userObj) {
    console.log(userObj.name);  // no ()
}

async function main() {
    const result = await getStudentInfo();
    displayInfo(result);   // pass data here
    console.log("Program");
}

main();


//getStudentInfo should return name,email and age
