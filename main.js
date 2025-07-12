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
    userMessage.innerText = "你： " + message;
    chatbox.appendChild(userMessage);

    // 模拟回应
    const botMessage = document.createElement("p");
    botMessage.className = "bot";
    const response = responses[Math.floor(Math.random() * responses.length)];
    botMessage.innerText = "默语： " + response;
    chatbox.appendChild(botMessage);

    // 清空输入框
    input.value = "";

    // 滚动到底部
    chatbox.scrollTop = chatbox.scrollHeight;
  }
}
