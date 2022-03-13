/**
 * Check if a object is present in array with id
 * @param {string} id - id of object
 * @param {array} arr - The array of objects for searching.
 * @returns {object | undefined} - The matched object, undefined if not present
 */
export const findItemById = (id, arr) => arr.find((item) => id === item._id);
