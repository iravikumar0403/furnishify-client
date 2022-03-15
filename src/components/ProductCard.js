export const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <div className="card-media cursor-pointer">
        <img
          className="img-responsive img-rounded"
          src={product.images[0]}
          alt={product.title}
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <small>By {product.seller}</small>
      </div>
      <div
        className="card-footer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="fs-2 m-0">₹ {product.price}</p>
        <div className="text-warn fs-1">
          <button className="btn icon-only primary">
            <i className="fa-regular fa-heart"></i>
          </button>
          <span>{product.rating}</span>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  );
};
