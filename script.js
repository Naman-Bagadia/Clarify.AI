const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const voiceBtn = document.getElementById("voice-btn");

let isTyping = false;

// Append message to chat box, returns the message div element
function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  if(sender === "ai") {
    const icon = document.createElement("span");
    icon.className = "bot-icon";
    icon.textContent = "🤖";
    message.appendChild(icon);
  }
  message.appendChild(document.createTextNode(text));
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
  return message;
}

// Typing animation dots for "Clarify is typing"
function showTypingAnimation(element) {
  let dots = 0;
  element.textContent = "Clarify is typing";
  const interval = setInterval(() => {
    dots = (dots + 1) % 4; // cycles 0..3 dots
    element.textContent = "Clarify is typing" + ".".repeat(dots);
  }, 500);
  return interval;
}

// Typewriter effect for AI messages
async function typeEffect(element, text) {
  element.textContent = "";
  for(let i = 0; i < text.length; i++) {
    element.textContent += text.charAt(i);
    await new Promise(r => setTimeout(r, 20));
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

async function sendMessage() {
  const message = input.value.trim();
  if (!message || isTyping) return;

  appendMessage("user", message);
  input.value = "";
  input.focus();

  const typingMsg = appendMessage("ai", "");
  isTyping = true;

  // Show animated typing dots
  const typingInterval = showTypingAnimation(typingMsg);

  try {
    const res = await fetch("/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();

    clearInterval(typingInterval);
    isTyping = false;

    typingMsg.textContent = "";

    if (data.response) {
      await typeEffect(typingMsg, data.response);
    } else {
      typingMsg.textContent = "Sorry, I didn't get a response.";
    }
  } catch (error) {
    console.error("Error:", error);
    clearInterval(typingInterval);
    isTyping = false;
    typingMsg.textContent = "Something went wrong. Please try again later.";
  }

  chatBox.scrollTop = chatBox.scrollHeight;
}

// Voice recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

voiceBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  input.value = transcript;
  input.focus();
};

recognition.onerror = (event) => {
  console.error("Speech recognition error:", event.error);
};

// Event listeners
sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    sendMessage();
  }
});
