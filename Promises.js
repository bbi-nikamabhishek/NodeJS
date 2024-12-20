// /*
// States of a Promise:
// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Chaining:

// Chaining:
// Promises can be chained using .then() for sequential asynchronous tasks.
// Error Handling:

// Error handling:
// Use .catch() to handle errors.
// Use .finally() to execute cleanup code regardless of success or failure.
// */

// //-----------------------------
const myPromise = new Promise((resolve, reject) => {
    let condition = false; 
    if (condition) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    })
    .finally(() => {
        console.log("Execution complete!");
    });

// //---------------------------------

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; 
            if (success) {
                console.log("-----------------------------------");
                resolve("Data fetched successfully!");
            } else {
                console.log("-----------------------------------");
                reject("Failed to fetch data.");
            }
        },1000);
    });
}
    
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error); 
    })
    .finally(() => {
        console.log("Fetch operation complete.");
    });

//     //-------------------------------------------
    
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
    
    Promise.all([promise1, promise2])
        .then((results) => {
            console.log("-----------------------------------");
            console.log(results); 
        })
        .catch((error) => {
            console.log("-----------------------------------");
            console.error(error);
        });

//         //---------------------------------
        
        function step1() {
            return new Promise((resolve) => {
                setTimeout(() => resolve("Step 1 completed"), 1000);
            });
        }
        
        function step2(previousResult) {
            return new Promise((resolve) => {
                setTimeout(() => resolve(`${previousResult} -> Step 2 completed`), 1000);
            });
        }
        
        step1()
            .then((result1) => step2(result1))
            .then((result2) => {console.log("-----------------------------------"); console.log(result2)}) // Output: Step 1 completed -> Step 2 completed
            .catch((error) => console.error(error));
            
//HANDLING MULTIPLE PROMISES:
/*
a) Promise.all
Waits for all promises to resolve. If any promise is rejected, it fails immediately.
*/  
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Error in p2");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
    .then((results) => console.log(results))
    .catch((error) => console.error(error));
  
/*
b) Promise.allSettled
Waits for all promises to settle (either fulfilled or rejected).
 */

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
/* Output:
[
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 'Error in p2' },
  { status: 'fulfilled', value: 3 }
]
*/

/*
c) Promise.race
Returns the first promise that resolves or rejects.
*/

// const p1 = new Promise((resolve) => setTimeout(() => resolve("P1"), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve("P2"), 500));

Promise.race([p1, p2]).then((result) => console.log(result)); 

function task1() {
  return new Promise((resolve, reject) => {
      setTimeout(() => reject("Error in task1"), 1000);
  });
}

function task2() {
  return new Promise((resolve) => {
      setTimeout(() => resolve("Task 2 completed"), 1000);
  });
}

task1()
  .then(() => task2())
  .catch((error) => console.error(error)); 

//async-await

async function fetchData() {
  try {
      const data = await new Promise((resolve) => {
          setTimeout(() => resolve("Fetched data"), 1000);
      });
      console.log(data); 
  } catch (error) {
      console.error(error);
  }
}

fetchData();

async function sequentialTasks() {
  const result1 = await new Promise((resolve) =>
      setTimeout(() => resolve("Task 1 done"), 1000)
  );
  console.log(result1);

  const result2 = await new Promise((resolve) =>
      setTimeout(() => resolve("Task 2 done"), 1000)
  );
  console.log(result2);
}

sequentialTasks();

