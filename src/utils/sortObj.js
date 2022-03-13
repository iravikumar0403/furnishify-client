/**
 * Sorts json array.
 * @param {array} products - Array of product objects.
 * @param {string} sortBy - sort condition.
 * @returns {array} - sorted array of objects.
 */
export const getSortedProducts = (products, sortBy) => {
  switch (sortBy) {
    case "price_asc":
      return [...products.sort((a, b) => a.price - b.price)];
    case "price_desc":
      return [...products.sort((a, b) => b.price - a.price)];
    case "rating_asc":
      return [...products.sort((a, b) => a.rating - b.rating)];
    case "rating_desc":
      return [...products.sort((a, b) => b.rating - a.rating)];
    default:
      return products;
  }
};
