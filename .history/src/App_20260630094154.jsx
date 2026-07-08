import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRoutes />
      <Footer/>
      <WhatsAppButton
        phoneNumber="919999999999"
        message="Hi, I'm interested in your services!"
      />
    </BrowserRouter>
  );
}

export default App;