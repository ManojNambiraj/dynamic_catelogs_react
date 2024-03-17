import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./Pages/Auth/Register/Register";
import Login from "./Pages/Auth/Login/Login";
import Landing from "./Pages/Landing/Landing";
import ProductList from "./Pages/ProductList/ProductList";
import WishList from "./Pages/WishList/WishList";
import Product from "./Pages/Product/Product";

export const BackendAPI = "http://localhost:8080";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
