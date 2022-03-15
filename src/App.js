import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Homepage, ProductListing } from "./pages";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
