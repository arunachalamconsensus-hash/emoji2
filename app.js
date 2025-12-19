const emojiMap = {
    smile: "😊",
    sad: "😢",
    heart: "❤️",
    angry: "😠",
    laugh: "😂",
    cry: "😭",
    thumbs: "👍",
    fire: "🔥",
    star: "⭐",
    sun: "☀️"
  };
  document.getElementById("emojiCount").addEventListener("input", (e) => {
  if (e.target.value > 20) e.target.value = 20;
  if (e.target.value < 1) e.target.value = 1;
});

  const button = document.getElementById("generateBtn");
  const container = document.getElementById("emojiContainer");
  
  button.onclick = () => {
    
    const nameInput = document.getElementById("emojiName").value.trim().toLowerCase();
    const count = parseInt(document.getElementById("emojiCount").value);
  
    if (!emojiMap[nameInput]) {
      alert("Unknown emoji name. Try: smile, sad, heart, laugh, fire...");
      return;
    }
    if (isNaN(count) || count < 1 || count > 20) {
    alert("⚠️ Please enter a number between 1 and 20 for emoji count.");
    return;
  }
  
    if (!count || count <= 0) {
      alert("Enter a valid quantity.");
      return;
    }
  
    const emojiChar = emojiMap[nameInput];
  
    for (let i = 0; i < count; i++) {
      const emojiDiv = document.createElement("div");
      emojiDiv.className = "emoji-box";
      emojiDiv.textContent = emojiChar;
      container.appendChild(emojiDiv);
    }
  };
  