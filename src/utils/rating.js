/**
 * Filter json array based on rating param
 * @param {array} products - Array of product objects
 * @param {number} rating - minimum rating.
 * @returns {array} - Filtered array of objects.
 */
export const filterByRating = (products, rating) => {
  return products.filter((product) => product.rating >= rating);
};
