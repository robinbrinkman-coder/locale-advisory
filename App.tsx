import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";          // <-- use your existing Home.tsx
import Insights from "./pages/Insights";  // <-- the page you just built

export default function App() {
  return (
    <>
      <header style={{ padding: 16 }}>
        <nav style={{ display: "flex", gap: 16 }}>
          <Link to="/">Home</Link>
          <Link to="/insights">Insights</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </>
  );
}
