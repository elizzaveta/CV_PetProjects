import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/css/colors.css"
import LandingV2 from "./components/LandingV2";

function App() {
  return (
      <BrowserRouter>
        <LandingV2/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;