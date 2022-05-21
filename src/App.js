import { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  switch (currentPage) {
    case "About":
      return <About setCurrentPage={setCurrentPage} />;
    case "Menu":
      return <Menu setCurrentPage={setCurrentPage} />;
    case "Contact":
      return <Contact setCurrentPage={setCurrentPage} />;
    default:
      return <Home setCurrentPage={setCurrentPage} />;
  }
}
