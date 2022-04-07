import notfound from "../assets/notfound.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const NotFound = () => {
  useDocumentTitle("Furnishify");
  return (
    <div className="container text-center">
      <img src={notfound} alt="404 not found" width="60%" />
      <p className="fs-3">Oops! Page not found</p>
    </div>
  );
};
