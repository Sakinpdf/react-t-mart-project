
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./components/Layout/Layout";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home page */}
        <Route index element={<Home />} />

        {/* Shop page */}
        <Route path="shop" element={<Shop />} />

        {/* Product details page */}
        <Route path="shop/:id" element={<ProductDetails />} />

        {/* Contact page */}
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
