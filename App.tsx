import Home from "./pages/Home";  // adjust this path if your Home.tsx lives somewhere else

export default function App() {
  // Provide a dummy onNavigate so Home works even if it's expecting one
  return <Home onNavigate={() => {}} />;
}
