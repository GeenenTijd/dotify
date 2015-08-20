'use strict';

function dotify(obj) {
  var res = {};
  function recurse(obj, current) {
    for (var key in obj) {
      var value = obj[key];
      var newKey = (current ? current + '.' + key : key);  // joined key with dot
      if (value && typeof value === 'object') {
        recurse(value, newKey);  // it's a nested object, so do it again
      } else {
        res[newKey] = value;  // it's not an object, so set the property
      }
    }
  }

  recurse(obj);
  return res;
}

module.exports = dotify;
