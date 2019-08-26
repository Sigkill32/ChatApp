import React from "react";
import ChatBubble from "./chatBubble";

const ChatView = ({ messages }) => {
  return (
    <div className="chat-view">
      {messages.map((message, index) => (
        <ChatBubble message={message} key={index} />
      ))}
      <span></span>
    </div>
  );
};

export default ChatView;
