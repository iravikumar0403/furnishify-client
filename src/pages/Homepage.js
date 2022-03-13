import { Fragment } from "react";
import { Categories, Hero } from "../components";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export const Homepage = () => {
  useDocumentTitle("Furnishify");
  return (
    <Fragment>
      <Hero />
      <Categories />
    </Fragment>
  );
};
