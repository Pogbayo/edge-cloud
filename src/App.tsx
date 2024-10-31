import { Details } from "./components/details/Details";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/Home";
import MapComponent from "./components/map/map";

const App = () => {
  return (
    <div className="app">
      <Home />
      <MapComponent />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
