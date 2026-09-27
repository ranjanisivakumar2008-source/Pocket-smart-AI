function sendMessage() {

    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = message;

    chatBox.appendChild(userMessage);

    // Simple AI response
    const botMessage = document.createElement("div");
    botMessage.className = "bot";

    const text = message.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
        botMessage.textContent = "Hello! 👋 Nice to meet you!";
    }
    else if (text.includes("name")) {
        botMessage.textContent = "I'm Pocket Smart AI 🤖";
    }
    else if (text.includes("help")) {
        botMessage.textContent =
            "Sure! I can answer simple questions and assist you.";
    }
    else if (text.includes("thank")) {
        botMessage.textContent = "You're welcome! 😊";
    }
    else {
        botMessage.textContent =
            "That's interesting! I'm still learning. 🤖";
    }

    setTimeout(() => {
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});