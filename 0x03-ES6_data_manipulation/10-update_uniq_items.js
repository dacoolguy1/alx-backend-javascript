/**
 * Update map values that's 1 to 100
 * @param {Map} map - A collection of map
 */
export default function (map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, map) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
