import "./App.css";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import api from "./services/api";

function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello! Upload your document or ask me anything.",
    },
  ]);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    try {
      const response = await api.post("/chat-api/", {
        question: text,
        document_id: null, // Change this later when document selection is added
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: response.data.answer,
        },
      ]);
    } catch (error) {
      console.log("========== ERROR ==========");
      console.log(error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Data:", error.response.data);
      }

      if (error.request) {
        console.log("Request:", error.request);
      }

      console.log("===========================");

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Unable to connect to Django API.",
        },
      ]);
    }
  };

  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Header />

        <ChatWindow messages={messages} />

        <ChatInput sendMessage={sendMessage} />
      </div>
    </div>
  );
}

export default App;
