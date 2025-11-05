import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Services"; // temporarily using your Services page as the home display
import Insights from "./pages/Insights"; // you'll create this file next

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
