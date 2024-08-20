// <https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_isplainobject>
function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) return false;

  if (Object.prototype.toString.call(value) !== '[object Object]') return false;

  const proto = Object.getPrototypeOf(value);
  if (proto === null) return true;

  const Ctor =
    Object.prototype.hasOwnProperty.call(proto, 'constructor') &&
    proto.constructor;
  return (
    typeof Ctor === 'function' &&
    Ctor instanceof Ctor &&
    Function.prototype.call(Ctor) === Function.prototype.call(value)
  );
}

// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore?tab=readme-ov-file#_isempty
const isEmpty = (obj) =>
  [Object, Array].includes((obj || {}).constructor) &&
  Object.entries(obj || {}).length === 0;

function dotify(obj) {
  const res = {};
  function recurse(obj, current) {
    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
      const value = obj[key];
      const newKey = current ? current + '.' + key : key; // joined key with dot
      if (
        typeof value !== 'undefined' &&
        (isPlainObject(value) || Array.isArray(value))
      ) {
        if (Array.isArray(value) && isEmpty(value)) {
          res[newKey] = value;
        } else {
          recurse(value, newKey); // it's a nested object, so do it again
        }
      } else {
        res[newKey] = value; // it's not an object, so set the property
      }
    }
  }

  recurse(obj);
  return res;
}

module.exports = dotify;
