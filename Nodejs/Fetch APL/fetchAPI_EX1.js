// You want to get your pizza (data) from the server
async function getPizza() {
    console.log("Ordering pizza...");

    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    // You called the shop (URL)

    let pizza = await response.json(); 
    // Wait for pizza (data) to come

    console.log("Pizza delivered:", pizza);
}

getPizza();

async function sendFeedback() {
    let feedback = { message: "Great website!" };

    let response = await fetch('https://example.com/feedback', {
        method: 'POST', // sending something
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback) // convert object to JSON
    });

    let result = await response.json();
    console.log("Feedback response:", result);
}