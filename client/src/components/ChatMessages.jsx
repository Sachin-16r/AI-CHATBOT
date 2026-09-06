const ChatMessages = ({ messages, loading }) => {
  return (
    <div className="chat-messages">
      {messages.length === 0 ? (
        <div className="welcome-screen">
          <div className="welcome-icon">
            ✦
          </div>

          <h2>How can I help you?</h2>

          <p>
            Ask me anything. I'm here to help you learn,
            build, create and explore.
          </p>

          <div className="suggestions">
            <div className="suggestion">
              <span>💡</span>
              Explain something to me
            </div>

            <div className="suggestion">
              <span>💻</span>
              Help me write code
            </div>

            <div className="suggestion">
              <span>🚀</span>
              Help me build a project
            </div>

            <div className="suggestion">
              <span>🧠</span>
              Teach me something new
            </div>
          </div>
        </div>
      ) : (
        <div className="messages-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${message.role}`}
            >
              {message.role === "assistant" && (
                <div className="avatar ai-avatar">
                  ✦
                </div>
              )}

              <div className="message-content">
                <div className="message-name">
                  {message.role === "user" ? "You" : "Nova AI"}
                </div>

                <div className="message-bubble">
                  {message.content}
                </div>
              </div>

              {message.role === "user" && (
                <div className="avatar user-avatar">
                  You
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="message-row assistant">
              <div className="avatar ai-avatar">
                ✦
              </div>

              <div className="message-content">
                <div className="message-name">Nova AI</div>

                <div className="message-bubble typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatMessages;