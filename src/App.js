import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Waiver from "./pages/Waiver";
import Schedule from "./pages/Schedule";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="waiver" element={<Waiver />} />
      <Route path="schedule" element={<Schedule />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
