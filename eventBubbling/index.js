document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked!");
});

/*To stop the bubbling process, you can use the event.stopPropagation() method. This prevents the event from propagating further up the DOM tree.*/
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", (event) => {
    console.log("Child clicked!");
    event.stopPropagation(); // Stop the event from bubbling
});
