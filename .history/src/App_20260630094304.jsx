import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRoutes />
      <Footer/>
       <a
        href="https://wa.me/919841063255"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </BrowserRouter>
  );
}

export default App;