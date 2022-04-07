import { useFilter } from "../context/filter-context";

export const Filters = () => {
  const {
    filters: { category, sortBy, rating, price },
    dispatch,
  } = useFilter();
  const { desk, table, storage, chair } = category;

  const handleCategoryChange = (e) => {
    dispatch({
      type: "CATEGORY",
      payload: e.target.value,
    });
  };

  const handleRatingChange = (e) => {
    dispatch({
      type: "RATING",
      payload: e.target.value,
    });
  };

  const handleSortChange = (e) => {
    dispatch({
      type: "SORT",
      payload: e.target.value,
    });
  };

  const handlePriceChange = (e) => {
    dispatch({
      type: "PRICE",
      payload: e.target.value,
    });
  };

  return (
    <aside className="filter-section p-4">
      <div className="filter-header">
        <p className="fs-3">Filter</p>
        <button
          className="ml-auto p-0 mx-0 btn text-light"
          onClick={() =>
            dispatch({
              type: "CLEAR_FILTER",
            })
          }
        >
          Clear filters
        </button>
      </div>
      <div className="my-1">
        <p className="fs-2">Sort by</p>
        <select value={sortBy} className="input" onChange={handleSortChange}>
          <option value="">sort by</option>
          <option value="price_asc">Price: low to high</option>
          <option value="price_desc">Price: high to low</option>
          <option value="rating_asc">Rating: low to high</option>
          <option value="rating_desc">Rating: high to low</option>
        </select>
      </div>
      <hr />
      <div className="my-1">
        <div className="my-1">
          <p className="fs-2">Price</p>
          <label>{price}</label>
          <input
            className="input p-0"
            type="range"
            name="price"
            min="1000"
            max="10000"
            value={price}
            step="1000"
            onChange={handlePriceChange}
          />
        </div>
        <hr />
        <p className="fs-2">Category</p>
        <ul className="fs-1 list no-bullets">
          <li>
            <input
              className="mr-1"
              id="desk"
              type="checkbox"
              name="category"
              value="desk"
              checked={desk}
              onChange={handleCategoryChange}
            />
            <label htmlFor="desk">Desk</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="side-table"
              type="checkbox"
              name="category"
              checked={table}
              value="table"
              onChange={handleCategoryChange}
            />
            <label htmlFor="side-table">Side Tables</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="storage"
              type="checkbox"
              name="category"
              value="storage"
              checked={storage}
              onChange={handleCategoryChange}
            />
            <label htmlFor="storage">Storage</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="chairs"
              type="checkbox"
              name="category"
              value="chair"
              checked={chair}
              onChange={handleCategoryChange}
            />
            <label htmlFor="chairs">Chairs</label>
          </li>
        </ul>
      </div>
      <hr />
      <div className="my-1">
        <p className="fs-2">Rating</p>
        <ul className="fs-1 list no-bullets">
          <li>
            <input
              className="mr-1"
              id="four"
              type="radio"
              name="rating"
              value="4"
              checked={rating === "4"}
              onChange={handleRatingChange}
            />
            <label htmlFor="four">Four stars and above</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="three"
              type="radio"
              name="rating"
              value="3"
              checked={rating === "3"}
              onChange={handleRatingChange}
            />
            <label htmlFor="three">Three stars and above</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="two"
              type="radio"
              name="rating"
              value="2"
              checked={rating === "2"}
              onChange={handleRatingChange}
            />
            <label htmlFor="two">Two stars and above</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="one"
              type="radio"
              name="rating"
              value="1"
              checked={rating === "1"}
              onChange={handleRatingChange}
            />
            <label htmlFor="one">One stars and above</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};
