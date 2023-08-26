import React, { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Navbar from "./components/Navbar/Navbar";
import Slogan from "./components/Slogan/Sologan";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white md:px-20">
      <Navbar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
