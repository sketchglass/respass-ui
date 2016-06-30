import {EventEmitter} from "events";

interface NewMessageEvent {
  ev: "NEW_MESSAGE";
  value: Message;
}

interface CreateMessageEvent {
  ev: "CREATE_MESSAGE";
  value: string;
}

export
interface Message {
  text: string;
  user: {
    name: string;
  };
}

export
class Thread extends EventEmitter {
  connetion = new WebSocket("ws://localhost:8080");
  messages: Message[] = [];

  constructor() {
    super();
    this.connetion.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data);
        switch (message.ev) {
        case "NEW_MESSAGE":
          const newMessage = message as NewMessageEvent;
          console.log("message received:", message);
          this.messages.push(message.value);
          this.emit("message");
          break;
        default:
          break;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  newMessage(message: string) {
    const createMessage: CreateMessageEvent = {
      ev: "CREATE_MESSAGE",
      value: message
    };
    this.connetion.send(JSON.stringify(createMessage));
  }
}

export
const thread = new Thread();
