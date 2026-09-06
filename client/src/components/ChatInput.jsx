import { useState } from "react";

const ChatInput = ({ onSend, loading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim() || loading) return;

    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="input-wrapper">
      <form className="chat-input" onSubmit={handleSubmit}>
        <button
          type="button"
          className="input-icon"
          title="Attach file"
        >
          +
        </button>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Nova AI..."
          rows="1"
          disabled={loading}
        />

        <button
          type="submit"
          className="send-button"
          disabled={!message.trim() || loading}
        >
          ↑
        </button>
      </form>

      <p className="input-hint">
        Nova AI can make mistakes. Check important information.
      </p>
    </div>
  );
};

export default ChatInput;