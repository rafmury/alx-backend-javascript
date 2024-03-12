/**
 * Changes the quantity of unique grocery items to 100.
 * @param {Map<String, number>} map - A map of the name of a
 * grocery and its quantity.
 * @returns {Map<String, number>} - Updated map with quantities modified.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const updatedMap = new Map();

  map.forEach((value, key) => {
    if (value === 1) {
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, value);
    }
  });

  return updatedMap;
}

