import React, { Component } from "react"
import InboxMessages from './messages.component';

class Inbox extends Component {
  render() {
    return (
      <div className="inbox">
        <div className="inbox-left">
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
          <InboxMessages
            name={'Sarah Kelly'}
            date={'6/22/2018'}
            message={'Please reply asap'}
          />
        </div>
        <div className="inbox-right">
          <input type="text" placeholder="Type your message" />
        </div>
      </div>
    );
  }
}

export default Inbox;
