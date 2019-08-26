import React, { Component } from "react";
import ChatHead from "./components/chatHead";
import MessageInput from "./components/messageInput";
import ChatView from "./components/chatView";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    messages: [
      {
        text: "Hi Mark I made a new design for the messenger App.",
        clsName: "recieved",
        timestamp: "10:30"
      },
      {
        text:
          "Yo! send it to my assistant and we'll review it during the year.",
        clsName: "sent",
        timestamp: "10:57"
      },
      { text: "But Mark...", clsName: "recieved", timestamp: "11:03" },
      {
        text: "you were blocked by the user",
        clsName: "blocked-right blocked",
        timestamp: "11:20"
      }
    ],
    text: "",
    cls: { messenger: "hide", button: "open-chat" }
  };

  handleChange = event => {
    const text = event.target.value;
    this.setState({ text });
  };

  handleClick = () => {
    const { text } = this.state;
    if (text === "")
      alert("Seems like you forgot to type your message. Try again!");
    else {
      const message = {
        text: text,
        clsName: "sent",
        timestamp: `${new Date().getHours()}:${new Date().getMinutes()}`
      };
      let messages = [...this.state.messages, message];
      this.setState({ messages, text: "" });
    }
  };

  openChat = () => {
    this.setState({ cls: { messenger: "show", button: "hide" } });
  };

  handleClose = () => {
    this.setState({ cls: { messenger: "hide", button: "open-chat" } });
  };

  handleKeyPress = e => {
    if (e.charCode === 13) this.handleClick();
  };

  render() {
    const { messages, text, cls } = this.state;
    return (
      <div>
        <div className={cls.messenger}>
          <ChatHead OnHandleClose={this.handleClose} />
          <ChatView messages={messages} />
          <MessageInput
            handleOnClick={this.handleClick}
            handleOnChange={this.handleChange}
            text={text}
            handleOnKeypress={this.handleKeyPress}
          />
        </div>
        {/* <button onClick={this.openChat} className={cls.button}>
          Start Chatting
        </button> */}
        <FontAwesomeIcon
          icon={faComments}
          size="6x"
          className={cls.button}
          onClick={this.openChat}
          color="white"
        />
      </div>
    );
  }
}

export default App;
