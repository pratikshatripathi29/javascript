// JavaScript FoundaƟons (Beginner)
// • Create a tasks array to store task objects.
// • Task structure: id, Ɵtle, status (pending/completed).
// • Implement addTask(Ɵtle) with auto-increment id.
// • Implement getAllTasks() using console.table().
// • Implement completeTask(id).
// • Implement deleteTask(id) using filter().
// • Must use arrow funcƟons, map(), filter(), and find()


// Tasks array
let tasks = [];

// Auto increment ID
let currentId = 1;

// Add Task
const addTask = (title) => {
    const newTask = {
        id: currentId++,
        title: title,
        status: "pending"
    };

    tasks.push(newTask);
    console.log("Task Added Successfully!");
};

// Get All Tasks
const getAllTasks = () => {
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }
    console.table(tasks);
};

// Complete Task
const completeTask = (id) => {
    const task = tasks.find(t => t.id === id);

    if (!task) {
        console.log("Task not found!");
        return;
    }

    task.status = "completed";
    console.log("Task marked as completed!");
};

// Delete Task
const deleteTask = (id) => {
    const taskExists = tasks.find(t => t.id === id);

    if (!taskExists) {
        console.log("Task not found!");
        return;
    }

    tasks = tasks.filter(t => t.id !== id);
    console.log("Task deleted successfully!");
};

// Optional: Get Only Completed Tasks (using map)
const getCompletedTasks = () => {
    const completed = tasks
        .filter(t => t.status === "completed")
        .map(t => ({
            id: t.id,
            title: t.title
        }));

    console.table(completed);
};

addTask("Learn JavaScript");
addTask("Practice DSA");
addTask("Build Project");

getAllTasks();

completeTask(2);

getAllTasks();

deleteTask(1);

getAllTasks();

getCompletedTasks();




// find()	To find a task by ID
// filter()	To delete a task
// map()	To transform completed tasks
// Arrow Functions	Modern JS syntax
// console.table()	Display tasks in table format