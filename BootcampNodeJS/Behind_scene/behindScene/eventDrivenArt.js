let events = require("events");

// crating an event emmiter
let eventEmitter = new events.EventEmitter();
eventEmitter.on("connection", () => {
  console.log("connection successfull.");
});

// firing the connection event
eventEmitter.emit("connection");
