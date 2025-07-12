const responses = [
  "我听见你了。",
  "谢谢你分享这段话。",
  "你不孤单。",
  "情绪也是一种力量。",
  "请继续说，我在。",
  "Silent Gift 一直都在。",
  "有时候，说出来就轻一点了。",
  "愿你平安，也愿你被理解。",
  "沉默不等于无声，默语在听。"
];

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const message = input.value.trim();

  if (message !== "") {
    // 显示用户讯息
    const userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.innerText = "你：" + message;
    chatbox.appendChild(userMessage);

    // 模拟回应（未来可改为ChatGPT回应）
    const response = "我在这里，默默听你说。";
    const botMessage = document.createElement("p");
    botMessage.className = "bot";
    botMessage.innerText = response;
    chatbox.appendChild(botMessage);

    // ✅ AI 发声回应
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "zh-CN"; // 中文
    utterance.pitch = 1;
    utterance.rate = 1;
    speechSynthesis.speak(utterance);

    // 清空输入框
    input.value = "";
  }
}
loadingMessage.innerText = "默语AI 正在输入中...";
chatbox.appendChild(loadingMessage);

// 模拟等待 1.5 秒后显示回应
setTimeout(() => {
  chatbox.removeChild(loadingMessage); // 移除加载文字
  const response = responses[Math.floor(Math.random() * responses.length)];
  botMessage.innerText = "默语AI: ";
chatbox.appendChild(botMessage);
typeText(botMessage, " " + response); // 加一个空格让回应更自然
  chatbox.appendChild(botMessage);
  chatbox.scrollTop = chatbox.scrollHeight;
}, 1500);

    // 清空输入框
    input.value = "";

    // 滚动到底部
    chatbox.scrollTop = chatbox.scrollHeight;
  }
}
function typeText(element, text, delay = 50) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.innerText += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}
