import CoinPage from "./components/coins/coins";
import { Details } from "./components/details/Details";
import { Footer } from "./components/footer/footer";
import Formdata from "./components/form/formData";
import { Home } from "./components/home/Home";
import MapComponent from "./components/map/map";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <MapComponent />
                <Details />
                <Footer />
              </>
            }
          />
          <Route path="/coin" element={<CoinPage />} />
          <Route path="/form" element={<Formdata />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
