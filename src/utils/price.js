/**
 * Filter json array based on rating prop
 * @param {array} products - Array of product objects
 * @param {number} price - minimum price.
 * @returns {array} - Filtered array of objects.
 */
export const filterByPrice = (products, price) => {
  return products.filter((product) => product.price <= price);
};
