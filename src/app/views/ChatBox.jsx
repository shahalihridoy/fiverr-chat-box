import React, { Component } from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxHeader from "./ChatBoxHeader";
import Sidenav from "../components/Sidenav";

class ChatBox extends Component {
  state = {
    showSidenav: false
  };

  handleSidenavToggle = () => {
    this.setState({ showSidenav: !this.state.showSidenav });
  };

  render() {
    let { showSidenav } = this.state;
    return (
      <div className="chat-box relative">
        <Sidenav onSidenavToggle={this.handleSidenavToggle} {...this.state} />
        <div>
          <ChatBoxHeader onSidenavToggle={this.handleSidenavToggle} />
          <ChatBoxContainer />
          <ChatBoxFooter />
        </div>
      </div>
    );
  }
}

export default ChatBox;
