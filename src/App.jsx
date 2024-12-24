import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepages from "./pages/Homepages";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#343a40] text-[#f1f3f5] p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
