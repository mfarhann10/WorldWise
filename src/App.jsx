import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Homepages from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/country/CityList";
import CountryList from "./components/country/CountryList";
import City from "./components/country/City";
import Form from "./components/form/Form";
import { CitiesProvider } from "./contexts/CitesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepages />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            {/*  Default Routes of App*/}
            <Route index element={<Navigate replace to="cities" />} />

            <Route
              path="cities"
              element={<CityList /* cities={cities} isLoading={isLoading} */ />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={
                <CountryList /* cities={cities} isLoading={isLoading} */ />
              }
            />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
