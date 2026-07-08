import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <AppRoutes />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;