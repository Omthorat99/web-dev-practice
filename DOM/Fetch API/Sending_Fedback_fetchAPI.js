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