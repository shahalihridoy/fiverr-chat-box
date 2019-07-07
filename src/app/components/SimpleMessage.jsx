import React, { Fragment } from "react";

const SimpleMessage = ({
  currentUserID,
  senderUserID,
  message,
  time,
  children
}) => {
  const isMyMessage = () => {
    return currentUserID === senderUserID && currentUserID != null
      ? true
      : false;
  };

  return (
    <Fragment>
      <div className={isMyMessage() ? "flex flex-end" : "flex"}>
        <div
          className={
            isMyMessage()
              ? "simple-message flex flex-middle drop-shadow  bg-primary"
              : "simple-message flex flex-middle"
          }
        >
          <div className={isMyMessage() ? "display-none" : ""}>
            <img
              className="user-image text-middle"
              src="./assets/images/elephant-icon.png"
              alt="dummy icon"
            />
          </div>
          <div className="py-12 px-16 w-100">
            <p className={isMyMessage() ? "m-0 pre text-white" : "m-0"}>
              {message}
            </p>
            <p
              className={
                isMyMessage()
                  ? "m-0 pre flex flex-end text-white"
                  : "m-0 pre flex flex-end text-primary"
              }
            >
              {time}
            </p>
          </div>
        </div>
      </div>
      {children}
    </Fragment>
  );
};

export default SimpleMessage;
