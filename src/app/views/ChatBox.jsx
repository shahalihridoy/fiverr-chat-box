import React, { Component, Fragment } from "react";
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
      <Fragment>
        <Sidenav onSidenavToggle={this.handleSidenavToggle} {...this.state} />
        <div className="chat-box h-100vh overflow-hidden relative x-center">
          <div className="chat-box__header">
            <ChatBoxHeader
              {...this.state}
              onOperatorHide={this.handleOperatorHide}
              onSidenavToggle={this.handleSidenavToggle}
            />
          </div>
          <div className="chat-box__container relative mt-4 px-24 scroll-y">
            <ChatBoxContainer />
          </div>
          <div className="chat-box__footer">
            <ChatBoxFooter />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ChatBox;
