import { lazy } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./Pages/Home"));
const OurTeam = lazy(() => import("./Pages/Info"));
import Contact from "./Pages/ContactUs";
import Footer from "./components/Footer";
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <div className="w-full ">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourteam" element={<OurTeam/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
