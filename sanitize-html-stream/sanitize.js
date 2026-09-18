const { Transform } = require('stream');

class SanitizeHtmlStream extends Transform {
  _transform(chunk, encoding, callback) {
    const sanitized = chunk.toString().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    this.push(sanitized);
    callback();
  }
}

module.exports = { SanitizeHtmlStream };
