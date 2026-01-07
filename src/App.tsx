import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RD from "./pages/RD";
import SMM from "./pages/SMM";
import Technology from "./pages/Technology";
import Growth from "./pages/Growth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/rd" element={<RD />} />
      <Route path="/services/smm" element={<SMM />} />
      <Route path="/services/tech" element={<Technology />} />
      <Route path="/services/growth" element={<Growth />} />
    </Routes>
  );
}