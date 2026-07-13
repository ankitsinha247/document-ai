function Message({ message }) {
  return <div className={`message ${message.role}`}>{message.text}</div>;
}

export default Message;
