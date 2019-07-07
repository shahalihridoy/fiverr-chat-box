import React, { Component, Fragment } from "react";
import SimpleMessage from "../components/SimpleMessage";
import JobLocationMessage from "../components/JobLocationMessage";
import UploadResumeMessage from "../components/UploadResumeMessage";
import AlertMessage from "../components/AlertMessage";

class ChatBoxContainer extends Component {
  bottomRef = React.createRef();
  state = {
    messageList: []
  };

  constructor(props) {
    super(props);

    // fetch your message from api
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            type: "simple", //message type for general message
            message: "Hello, Welcome to Elepha.io",
            time: "09:00 AM",
            senderUserID: "121"
          },
          {
            type: "simple", //message type for general message
            message: "I want something...",
            time: "09:00 AM",
            senderUserID: "222"
          },
          {
            type: "region", //message type for selecting region
            message: "Hello, Welcome to Elepha.io",
            option: ["mumbai", "pune", "calcutaa", "assam"],
            time: "09:00 AM",
            senderUserID: "121"
          },
          {
            type: "upload", //message type for uploading resume
            message: "Hello, Welcome to Elepha.io",
            time: "09:00 AM",
            senderUserID: "121"
          },
          {
            type: "simple", //message type for general message
            message: "is that everything you have got ?",
            time: "09:00 AM",
            senderUserID: "222"
          },
          {
            type: "alert", //message type for showing confirmation diaolog
            message: "Hello, Welcome to Elepha.io",
            time: "09:00 AM",
            phone: "01975208815",
            city: "mumbai",
            showed: true,
            senderUserID: "121"
          }
        ]);
      }, 1000);
    }).then(messageList => {
      this.setState({ messageList });
    });
  }

  scrollToBottom = () => {
    this.bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  render() {
    let { messageList } = this.state;
    return (
      <div className="chat-box__container relative px-24 scroll-y">
        {messageList.map((message, index) => {
          switch (message.type) {
            case "simple":
              return (
                <Fragment key={index}>
                  <SimpleMessage {...message} currentUserID="222" />
                  <div className="py-16" />
                </Fragment>
              );

            case "region":
              return (
                <Fragment key={index}>
                  <JobLocationMessage {...message} currentUserID="222" />
                  <div className="py-16" />
                </Fragment>
              );

            case "upload":
              return (
                <Fragment key={index}>
                  <UploadResumeMessage {...message} currentUserID="222" />
                  <div className="py-16" />
                </Fragment>
              );

            case "alert":
              return message.showed ? null : (
                <AlertMessage key={index} {...message} />
              );

            default:
              break;
          }
        })}
        <div ref={this.bottomRef} />
      </div>
    );
  }
}

export default ChatBoxContainer;
