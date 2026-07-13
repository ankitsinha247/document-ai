import { useState } from "react";

function ChatInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    sendMessage(text);

    setText("");
  };

  return (
    <div className="chatInput">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        placeholder="Type your message..."
      />

      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;
