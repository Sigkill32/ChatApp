import React from "react";

const MessageInput = ({
  handleOnClick,
  handleOnChange,
  text,
  handleOnKeypress
}) => {
  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Enter Your Message"
        onChange={handleOnChange}
        value={text}
        onKeyPress={handleOnKeypress}
      />
      <button onClick={handleOnClick}>SEND</button>
    </div>
  );
};

export default MessageInput;
