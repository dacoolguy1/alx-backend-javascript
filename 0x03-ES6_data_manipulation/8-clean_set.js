/**
 * Join a set of string that start with startString together with -
 * @param {Set<String>} set - A collection of string
 * @param {String} startString - A starting string
 * @returns {String}
 */
export default function cleanSet(set, startString) {
  if (
    !set
    || !startString
    || typeof startString !== 'string'
    || !(set instanceof Set)
  ) {
    return '';
  }

  const newStr = [];
  for (const item of set) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      const newItem = item.substring(startString.length);

      if (newItem && newItem !== item) {
        newStr.push(newItem);
      }
    }
  }
  return newStr.join('-');
}
