import React from "react";

const setPClass = clsName => {
  if (clsName === "sent") return "p-sent";
  else if (clsName === "recieved") return "p-recieved";
  else return "hide";
};

const ChatBubble = ({ message }) => {
  return (
    <div className="chat-bubble">
      <p className={setPClass(message.clsName)}>{message.timestamp}</p>
      <div className={`${message.clsName} box`}>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default ChatBubble;
