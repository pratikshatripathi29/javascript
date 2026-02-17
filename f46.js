// function getStudentInfo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 name: "John",
//                 email: "john@gmail.com",
//                 age: 21
//             });
//         }, 2000); // 2 sec
//     });
// }

// function getAttendanceInfo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 attendance: "92%"
//             });
//         }, 2000); // 2 sec
//     });
// }

// function getExamInfo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 marks: 85,
//                 grade: "A"
//             });
//         }, 3000); // 3 sec
//     });
// }

// function displayInfo({name}){
//     console.log("Name:", name);
// }

// async function main(){
//     try {
//         const student = await getStudentInfo();
//         displayInfo(student);

//         const attendance = await getAttendanceInfo();
//         console.log("Attendance:", attendance.attendance);

//         const exam = await getExamInfo();
//         console.log("Marks:", exam.marks);
//         console.log("Grade:", exam.grade);

//         console.log("Program Completed Successfully");
//     } 
//     catch(error){
//         console.log("Error:", error);
//     }
// }

main();


function getStudentInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "John",
                email: "john@gmail.com",
                age: 21
            });
        }, 2000);
    });
}

function getAttendanceInfo() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                attendance: 85
            });
        }, 1500);
    });
}
