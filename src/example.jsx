import {
  Writable,
  Readable
}
from 'stream'

const option = {
  objectMode: true
}

class ArrayStream extends Readable {
  constructor(array) {
    super(option)
    this._array = array
  }
  _read() {
    this.push(this._array.shift() || null)
  }
}

class LogStream extends Writable {
  constructor() {
    super(option)
  }
  _write(chunk, encoding, callback) {
    console.log(chunk)
    callback()
  }
}

new ArrayStream([1, 2, 3, 4])
  .pipe(new LogStream)
