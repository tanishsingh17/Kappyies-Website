import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import Whitelist from "./pages/Whitelist";

function App() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);

  }, []);

  useEffect(() => {

    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    window.scrollTo(0, 0);

  }, [location.pathname, location.hash]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <CustomCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitelist" element={<Whitelist />} />
      </Routes>
    </>

  );
}

export default App;