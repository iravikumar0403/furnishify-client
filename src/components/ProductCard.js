import { Link } from "react-router-dom";

export const ProductCard = ({
  product: { _id, images, title, seller, price, rating },
}) => {
  return (
    <div className="card">
      <Link to={`/products/${_id}`}>
        <div className="card-media cursor-pointer">
          <img
            className="img-responsive img-rounded"
            src={images[0]}
            alt={title}
          />
        </div>
      </Link>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <small>By {seller}</small>
      </div>
      <div
        className="card-footer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="fs-2 m-0">₹ {price}</p>
        <div className="text-warn fs-1">
          <button className="btn icon-only primary">
            <i className="fa-regular fa-heart"></i>
          </button>
          <span>{rating}</span>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  );
};
