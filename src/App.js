import {BrowserRouter} from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import "./styles/css/colors.css"
import LandingV2 from "./components/v2/LandingV2";

function App() {
  return (
      <BrowserRouter>
        <LandingV2/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;