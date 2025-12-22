import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import StairAnimation from "./components/common/StairAnimation.tsx";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer.tsx";
import ScrollToTop from "./components/common/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <StairAnimation>
        <Header />
        <App />
        <Footer />
      </StairAnimation>
    </BrowserRouter>
  </StrictMode>
);
