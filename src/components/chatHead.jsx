import React from "react";
import src from "../images/close.svg";

const ChatHead = ({ OnHandleClose }) => {
  return (
    <div className="chat-head">
      <span></span>
      <h1>MARK ZUCKERBERG</h1>
      <img src={src} alt="close" onClick={OnHandleClose} />
    </div>
  );
};

export default ChatHead;
