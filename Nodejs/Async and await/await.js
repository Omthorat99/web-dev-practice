function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");
    await wait(2000); // waits for 2 seconds
    console.log("After 2 seconds");
}

run();


