import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, RequireAuth, MyAccount, AddressForm } from "./components";
import { useModal } from "./context/modal-context"
import {
  Homepage,
  Login,
  ProductListing,
  ProductDetails,
  Signup,
  Cart,
  WishList,
  Checkout,
} from "./pages";

function App() {
  const { isOpen } = useModal()
  return (
    <Fragment>
      <Navbar />
      { isOpen && <AddressForm />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<RequireAuth />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<MyAccount />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
