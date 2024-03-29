import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Waiver from "./pages/Waiver";
import Schedule from "./pages/Schedule";
import Weddings from "./pages/Weddings";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useState, useEffect } from "react";



function App() {
  const [data, setData] = useState({});

  const handleData = (data) => {
    setData(data);
    console.log(data)
    if (data.style) {
      const styleElement = document.createElement("style");
      styleElement.className = "custom-css";
      styleElement.innerHTML = data.style;
      document.head.appendChild(styleElement);
    }
  }

  useEffect(() => {
    //  random 12 char string
    if (!!window.data) {
      handleData(window.data);
    } else {
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      fetch(`https://www.jacksaxes.co/cms.php?json=${randomString}`)
        .then((res) => res.json())
        .then((data) => {
          handleData(data);
        }).catch(err => console.log(err));
    }
  }, []);

  return (
    <BrowserRouter>
      <Header data={data} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="about" element={<About data={data} />} />
        <Route path="waiver" element={<Waiver data={data} />} />
        <Route path="schedule" element={<Schedule data={data} />} />
        <Route path="weddings" element={<Weddings data={data} />} />
      </Routes>
      <Footer data={data} />
    </BrowserRouter>
  );
}

export default App;
