import * as React from "react";
import thread from "../thread";

const MessageView = (props: {message: string}) => {
  return <div className="message">{props.message}</div>;
}

class MessageForm extends React.Component<{}, {}> {
  render() {
    const onKeyPress = this.onKeyPress.bind(this);
    return (
      <textarea className="message-form" onKeyPress={onKeyPress} />
    );
  }

  onKeyPress(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      const textarea = event.target as HTMLTextAreaElement;
      console.log("sending...");
      event.preventDefault();
      thread.newMessage(textarea.value);
      textarea.value = "";
    }
  }
}

interface ThreadViewState {
  messages: string[];
}

export default
class ThreadView extends React.Component<{}, ThreadViewState> {

  constructor() {
    super();
    this.state = {
      messages: []
    };
    thread.on("message", () => {
      const {messages} = thread;
      this.setState({messages});
    });
  }

  render() {
    const {messages} = this.state;
    return (
      <div className="thread">
        <div className="messages">
          {messages.map((msg, i) => <MessageView key={i} message={msg} />)}
        </div>
        <MessageForm />
      </div>
    );
  }

  newMessage() {
  }
}
