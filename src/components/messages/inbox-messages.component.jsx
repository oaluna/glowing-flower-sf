import React from "react"

const Messages = () => {
  return <div className="messages"></div>;
};

const InboxMessages = ({ name, date, message }) => {
  return (
    <div className="inboxMessages">
      <img src="" alt="profile pic" />

      <div className="inboxMessagesDetails">
        <div className="inboxMessagesDetailsTop">
          <span>{name}</span>
          <span>{date}</span>
        </div>
        <div className="inboxMessagesDetailsBottom">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default InboxMessages