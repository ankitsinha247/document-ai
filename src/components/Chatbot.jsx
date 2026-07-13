import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = input;

    setInput("");

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/chat/", {
        question,
      });

      const botMessage = {
        role: "assistant",
        content: response.data.answer,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role}</b> : {m.content}
          </div>
        ))}
      </div>

      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
