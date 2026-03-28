console.log("A")

setTimeout(() => {
    console.log("B")
    
}, 100);



console.log("c")

//This is how JavaScript normally works — top to bottom.

//Each line waits for the previous one to finish. That’s synchronous execution.

console.log("Start");

setTimeout(() => {
  console.log("Waiting over");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Waiting over (after ~2 seconds)