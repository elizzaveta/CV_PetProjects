import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import "./styles/css/colors.css"
import Landing from "./components/Landing";

function App() {
    return (
        <BrowserRouter>
            <Landing/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;