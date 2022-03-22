import { categories } from "../data";
import { useFilter } from "../context/filter-context";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  const handleClick = (category) => {
    dispatch({
      type: "CATEGORY",
      payload: category.slug,
    });
    navigate("/products");
  };

  return (
    <section className="section">
      <h2 className="text-center">Explore Products in Different Categories</h2>
      <article className="card-grid justify-center">
        {categories.map((category) => (
          <div key={category.id} className="card overlay onhover">
            <div className="overlay">
              <h3>{category.name}</h3>
              <button
                className="btn primary"
                onClick={() => handleClick(category)}
              >
                Shop Now
              </button>
            </div>
            <div className="card-media">
              <img
                className="img-responsive img-rounded"
                src={category.image}
                alt={category.name}
              />
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
