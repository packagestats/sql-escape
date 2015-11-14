// Code from http://stackoverflow.com/a/7760578/700897
// I merely published it to npm for general use
module.exports = function(str) {
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function(char) {
    switch (char) {
      case '\0':
        return '\\0';
      case '\x08':
        return '\\b';
      case '\x09':
        return '\\t';
      case '\x1a':
        return '\\z';
      case '\n':
        return '\\n';
      case '\r':
        return '\\r';
      case '\"':
      case '\'':
      case '\\':
      case '%':
        // prepends a backslash to backslash, percent, and double/single quotes
        return '\\' + char;
    }
  });
};
