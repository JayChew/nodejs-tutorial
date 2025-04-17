const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => {
  console.log('An event occurred in test 1!');
});

emitter.on('error', (err) => {
  console.log('Error event:', err.message);
});

try {
  emitter.emit('event'); // Emit the event
  // emitter.removeListener('event'); // Remove the listener
  emitter.emit('event'); // Emit the event again
} catch (error) {
  emitter.emit('error', error); // Emit an error event
}

// emitter.on('event', () => {
//   console.log('An event occurred in test 2!');
// });

// emitter.emit('event'); // Emit the event
// emitter.removeListener('event'); // Remove the listener
// emitter.emit('event'); // Emit the event again