/**
 * search product based on matching name with query
 * @param {array} products - Array of product objects
 * @param {string} query - query string.
 * @returns {array} - Filtered array of objects.
 */
export const searchProducts = (products, query) => {
  if (!query) return products;
  return products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );
};
