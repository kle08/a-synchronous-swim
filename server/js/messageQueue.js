const messages = []; // the storage unit for messages
console.log(messages);


module.exports.enqueue = (message) => {
  messages.push(message);
  console.log(`Enqueing message: ${message}`);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  return messages.shift();
};