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
        <div>
          <ChatBoxHeader
            {...this.state}
            onOperatorHide={this.handleOperatorHide}
            onSidenavToggle={this.handleSidenavToggle}
          />
          <div
            className={`${
              this.state.showOperator
                ? "chat-box__container-collapse"
                : "chat-box__container-hide"
            } relative mt-4`}
          >
            <ChatBoxContainer />
          </div>
          <ChatBoxFooter />
        </div>
      </div>
    );
  }
}

export default ChatBox;
