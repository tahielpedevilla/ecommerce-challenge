import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./pages/NotFound/NotFound";

const MainRouter = () => (
  <Routes>
    <Route exact element={<Home />} path="/" />
    <Route element={<ProductDetails />} path="product?${id}" />
    <Route element={<Collections />} path="collections" />
    <Route element={<Men />} path="men" />
    <Route element={<Women />} path="women" />
    <Route element={<About />} path="about" />
    <Route element={<Contact />} path="contact" />
    <Route element={<NotFound />} path="*" />
  </Routes>
);

export default MainRouter;
