import {BrowserRouter} from "react-router-dom";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <Landing/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;