/**
 *  Check if elements in the array exist within the set.
 * @param {Set} set - set data structure
 * @param {Array} array - Array data structure
 * @returns {Boolean} - true if exist within set otherwise false
 */
export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}
