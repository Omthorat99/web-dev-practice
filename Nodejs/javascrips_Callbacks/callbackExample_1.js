function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}
setTimeout(() => {
    greet("om", sayBye);
}, 1000);
// greet("om", sayBye);

