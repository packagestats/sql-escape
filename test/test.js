var assert = require('assert');
var escape = require('../');

describe('escape', function() {
  it('escapes quotes', function() {
    assert.equal(escape('my sweet "string"'), 'my sweet \\"string\\"');
  });
});