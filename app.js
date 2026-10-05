const chat = document.getElementById("chat");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");


// Send message
function sendMessage() {

    const message = messageInput.value.trim();

    // Don't send empty messages
    if (message === "") {
        return;
    }

    // Add user's message
    addMessage(message, "user");

    // Clear input
    messageInput.value = "";

    // Simulate AI thinking
    setTimeout(() => {

        const response = getAIResponse(message);

        addMessage(response, "ai");

    }, 700);
}


// Add message to chat
function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message", sender);

    message.innerHTML = `
        <div class="message-content">
            ${text}
        </div>
    `;

    chat.appendChild(message);

    // Scroll to latest message
    chat.scrollTop = chat.scrollHeight;
}


// Simple temporary AI
function getAIResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        return "Hello! 👋 I'm SmartAI. How can I help you today?";
    }

    if (text.includes("name")) {
        return "My name is SmartAI 🤖.";
    }

    if (text.includes("how are you")) {
        return "I'm doing great! Thanks for asking. 😊";
    }

    if (text.includes("who are you")) {
        return "I'm SmartAI, your personal AI assistant.";
    }

    if (text.includes("thank")) {
        return "You're welcome! 😊";
    }

    return "That's interesting! 🤔 I'm still learning. Soon I'll be connected to a real AI model so I can give you much smarter answers.";
}


// Send when button is clicked
sendBtn.addEventListener("click", sendMessage);


// Send when Enter is pressed
messageInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});