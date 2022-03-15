export const Filters = () => {
  return (
    <aside className="filter-section p-4">
      <div className="filter-header">
        <p className="fs-3">Filter</p>
        <button className="mr-auto btn text-light">Clear filters</button>
      </div>
      <div className="my-1">
        <p className="fs-2">Sort by</p>
        <select className="input">
          <option value="" defaultValue>
            sort by
          </option>
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
          <label>{1000}</label>
          <input
            className="input p-0"
            type="range"
            name="price"
            min="1000"
            max="10000"
            step="1000"
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
            />
            <label htmlFor="desk">Desk</label>
          </li>
          <li>
            <input
              className="mr-1"
              id="side-table"
              type="checkbox"
              name="category"
              value="table"
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
            />
            <label htmlFor="one">One stars and above</label>
          </li>
        </ul>
      </div>
    </aside>
  );
};
