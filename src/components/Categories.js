import { categories } from "../data";

export const Categories = () => {
  return (
    <section className="section">
      <h2 className="text-center">Explore Products in Different Categories</h2>
      <article className="card-grid justify-center">
        {categories.map((category) => (
          <div key={category.id} className="card overlay onhover">
            <div className="overlay">
              <h3>{category.name}</h3>
              <button className="btn primary">Shop Now</button>
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
