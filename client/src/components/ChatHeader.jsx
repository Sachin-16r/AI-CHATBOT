const ChatHeader = () => {
  return (
    <header className="chat-header">
      <div className="brand">
        <div className="brand-icon">
          ✦
        </div>

        <div>
          <h1>Nova AI</h1>
          <p>
            <span className="online-dot"></span>
            Online
          </p>
        </div>
      </div>

      <button className="header-button" title="More options">
        ⋮
      </button>
    </header>
  );
};

export default ChatHeader;