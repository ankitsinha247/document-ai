import Message from "./Message";

function ChatWindow({ messages }) {
  return (
    <div className="chatWindow">
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}

export default ChatWindow;
