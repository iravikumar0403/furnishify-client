import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Footer,
  RequireAuth,
  ScrollToTop,
  NotFound,
} from "./components";
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
  return (
    <ScrollToTop>
      <Navbar />
      <main className="main">
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
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
