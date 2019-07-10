import React, { Component } from "react";
import { Icon, Fab, TextField } from "@material-ui/core";

class ChatBoxFooter extends Component {
  state = {
    message: ""
  };

  sendMessage = () => {
    // send message to api
    console.log(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    return (
      <div className="flex flex-middle px-24 py-4 relative">
        <TextField
          className="bg-white"
          variant="outlined"
          multiline={true}
          rowsMax={4}
          fullWidth
          placeholder="Type Message..."
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          // onKeyDown={e => (e.keyCode === 13 ? this.sendMessage() : null)}
          type="text"
        />
        <div className="ml-16">
          <Fab
            className="bg-light-dark"
            color="primary"
            onClick={this.sendMessage}
          >
            <Icon>send</Icon>
          </Fab>
        </div>
      </div>
    );
  }
}

export default ChatBoxFooter;
