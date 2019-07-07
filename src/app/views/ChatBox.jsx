import React, { Component } from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import Sidenav from "../components/Sidenav";

class ChatBox extends Component {
  state = {
    showSidenav: false,
    showOperator: true
  };

  handleSidenavToggle = () => {
    this.setState({ showSidenav: !this.state.showSidenav });
  };

  handleOperatorHide = () => {
    this.setState({ showOperator: false });
  };

  render() {
    return (
      <div className="chat-box relative x-center">
        <Sidenav onSidenavToggle={this.handleSidenavToggle} {...this.state} />
        <div className="h-100vh overflow-hidden">
          <ChatBoxHeader
            {...this.state}
            onOperatorHide={this.handleOperatorHide}
            onSidenavToggle={this.handleSidenavToggle}
          />
          <ChatBoxContainer />
          <ChatBoxFooter />
        </div>
      </div>
    );
  }
}

export default ChatBox;
