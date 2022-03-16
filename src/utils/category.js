/**
 * Filter json array based on category prop
 * @param {array} products - Array of product objects
 * @param {object} category - Categories object.
 * @returns {array} - Filtered array of objects.
 */
export const filterByCategory = (products, category) => {
  if (Object.values(category).every((v) => !v)) {
    return products;
  }
  return products.filter((product) => category[product.category]);
};
