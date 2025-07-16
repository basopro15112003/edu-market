import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import { FavoriteProducts } from "../pages/favorite-product";
import { products } from "../models/product/productData";

export function AppRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/favorites"
            element={<FavoriteProducts products={products} />}
          />
        </Routes>
      </Router>
    </>
  );
}
