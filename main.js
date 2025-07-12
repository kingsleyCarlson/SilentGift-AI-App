<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Silent Gift · 默语</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background: #111;
      color: #eee;
      font-family: 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: auto;
      padding: 40px 20px 100px;
    }

    h1 {
      text-align: center;
      font-size: 24px;
      margin-bottom: 20px;
    }

    #chatbox {
      background: #222;
      border-radius: 12px;
      padding: 20px;
      height: 400px;
      overflow-y: auto;
      box-shadow: 0 0 10px #000;
    }

    #chatbox p {
      margin: 10px 0;
      padding: 10px 14px;
      border-radius: 8px;
      max-width: 90%;
      word-wrap: break-word;
    }

    .user {
      background: #333;
      align-self: flex-end;
      text-align: right;
    }

    .bot {
      background: #444;
      color: #aee;
    }

    .input-area {
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 600px;
      left: 50%;
      transform: translateX(-50%);
      background: #111;
      display: flex;
      padding: 10px;
      box-shadow: 0 -1px 5px rgba(0,0,0,0.3);
    }

    #userInput {
      flex: 1;
      padding: 10px;
      border-radius: 6px;
      border: none;
      font-size: 16px;
      background: #333;
      color: #fff;
    }

    #sendButton {
      margin-left: 10px;
      padding: 10px 16px;
      background: #00bfff;
      color: #fff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    #sendButton:hover {
      background: #1e90ff;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>🪐 Silent Gift · 默语</h1>
    <div id="chatbox"></div>
  </div>

  <div class="input-area">
    <input type="text" id="userInput" placeholder="在这里说出你心里的话..." autocomplete="off">
    <button id="sendButton">发送</button>
  </div>

  <script>
    const responses = [
      "我听见你了。",
      "谢谢你分享这段话。",
      "你不孤单。",
      "情绪也是一种力量。",
      "请继续说，我在。",
      "Silent Gift 一直都在。",
      "有时候，说出来就轻一点了。",
      "愿你平安，也愿你被理解。",
      "沉默不等于无声，默语在听。",
      "也许你不需要被改变，只需要被温柔地理解。"
    ];

    function sendMessage() {
      const input = document.getElementById("userInput");
      const chatbox = document.getElementById("chatbox");
      const message = input.value.trim();
      if (message === "") return;

      // 📌 第一次设定用户名
      if (!localStorage.getItem("userName")) {
        localStorage.setItem("userName", message);
        const welcome = document.createElement("p");
        welcome.className = "bot";
        welcome.innerText = `嗨，${message}。Silent Gift 很高兴认识你。`;
        chatbox.appendChild(welcome);
        input.value = "";
        return;
      }

      // ✏️ 用户输入显示
      const userMessage = document.createElement("p");
      userMessage.className = "user";
      userMessage.innerText = "你：" + message;
      chatbox.appendChild(userMessage);

      // ⌛ 加载提示
      const loadingMessage = document.createElement("p");
      loadingMessage.className = "bot";
      loadingMessage.innerText = "默语AI 正在输入中...";
      chatbox.appendChild(loadingMessage);
      chatbox.scrollTop = chatbox.scrollHeight;

      // ⏱️ 模拟打字回应
      setTimeout(() => {
        chatbox.removeChild(loadingMessage);
        const response = responses[Math.floor(Math.random() * responses.length)];
        const botMessage = document.createElement("p");
        botMessage.className = "bot";
        botMessage.innerText = "默语AI：";
        chatbox.appendChild(botMessage);

        typeText(botMessage, " " + response);
        chatbox.scrollTop = chatbox.scrollHeight;

        // 🔊 语音朗读
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.lang = "zh-CN";
        utterance.pitch = 1;
        utterance.rate = 1;
        speechSynthesis.speak(utterance);
      }, 1500);

      input.value = "";
    }

    // 🎬 打字机文字效果
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

    document.getElementById("sendButton").addEventListener("click", sendMessage);
    document.getElementById("userInput").addEventListener("keydown", function (event) {
      if (event.key === "Enter") sendMessage();
    });
  </script>

</body>
</html>
