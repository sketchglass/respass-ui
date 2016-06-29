import {EventEmitter} from "events";

interface NewMessageEvent {
  ev: "NEW_MESSAGE";
  value: string;
}

interface CreateMessageEvent {
  ev: "CREATE_MESSAGE";
  value: string;
}

class Thread extends EventEmitter {
  connetion = new WebSocket("ws://localhost:8080");
  messages: string[] = [];

  constructor() {
    super();
    this.connetion.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as NewMessageEvent;
        console.log("message received:", message);
        this.messages.push(message.value);
        this.emit("message");
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

const thread = new Thread();
export default thread;
