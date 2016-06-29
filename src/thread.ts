import {EventEmitter} from "events";

class Thread extends EventEmitter {
  connetion = new WebSocket("ws://localhost:8080");
  messages: string[] = [];

  constructor() {
    super();
    this.connetion.onmessage = (event) => {
      const message = event.data;
      console.log("message received:", message);
      this.messages.push(message);
      this.emit("message");
    }
  }

  newMessage(message: string) {
    this.connetion.send(message);
  }
}

const thread = new Thread();
export default thread;
