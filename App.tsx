// App.tsx (only the important parts shown)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost"; // ← add this

export default function App() {
  return (
    <BrowserRouter>
      {/* your header/nav */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightPost />} /> {/* ← add this */}
      </Routes>
      {/* your footer */}
    </BrowserRouter>
  );
}
