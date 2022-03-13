import { Fragment } from "react";
import { Navbar, Footer } from "./components";
import { Homepage } from "./pages";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
      <Footer />
    </Fragment>
  );
}

export default App;
