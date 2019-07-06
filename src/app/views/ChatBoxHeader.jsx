import React from "react";
import { Icon, Avatar, IconButton } from "@material-ui/core";

const ChatBoxHeader = ({ onSidenavToggle }) => {
  return (
    <div className="chat-box__header">
      <div className="header__logo py-8 flex flex-middle flex-center">
        <img
          onClick={onSidenavToggle}
          className="header__home-icon"
          src="./assets/images/home-icon.png"
          alt="home-icon"
        />
        <img src="./assets/images/logo.png" alt="logo" />
      </div>
      <div className="header__operator pl-32 pr-16 py-4 flex flex-middle flex-space-between">
        <div className="flex flex-middle">
          <Avatar src="./assets/images/face-4.jpg" />
          <h4 className="fw-600 m-0 ml-12 capitalize">Dunk johnoson</h4>
        </div>
        <IconButton>
          <Icon className="text-white">close</Icon>
        </IconButton>
      </div>
    </div>
  );
};

export default ChatBoxHeader;
