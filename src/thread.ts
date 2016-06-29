import {EventEmitter} from "events";

interface MessageEvent {
  ev: "NEW_MESSAGE";
  value: string;
}

class Thread extends EventEmitter {
  connetion = new WebSocket("ws://localhost:8080");
  messages: string[] = [];

  constructor() {
    super();
    this.connetion.onmessage = (event) => {
      try {
        const message = JSON.parse(event.data) as MessageEvent;
        console.log("message received:", message);
        this.messages.push(message.value);
        this.emit("message");
      } catch (error) {
        console.error(error);
      }
    }
  }

  newMessage(message: string) {
    this.connetion.send({
      ev: "CREATE_MESSAGE",
      value: message
    });
  }
}

const thread = new Thread();
export default thread;
