const { Duplex } = require('stream');

class MyDuplexStream extends Duplex {
  constructor(options) {
    super(options);
    this.data = [];
  }

  _write(chunk, encoding, callback) {
    // Store the chunk of data in the internal array
    this.data.push(chunk);
    console.log(`Writing: ${chunk.toString()}`);
    // Indicate that the writing process is complete
    callback();
  }

  _read(size) {
    // If there's data in the internal array, push it to the readable side
    if (this.data.length > 0) {
      const chunk = this.data.shift();
      console.log(`Reading: ${chunk.toString()}`);
      this.push(chunk);
    } else {
      // If no data, push null to signal the end of the readable side
      this.push(null);
    }
  }
}

// Create an instance of the duplex stream
const duplexStream = new MyDuplexStream();

// Write data to the duplex stream
duplexStream.write('Hello, ');
duplexStream.write('world!');

// Read data from the duplex stream
duplexStream.on('data', (chunk) => {
  console.log(`Received: ${chunk.toString()}`);
});

// End the writable side of the stream
duplexStream.end();
