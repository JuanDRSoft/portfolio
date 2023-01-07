import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/Layout.css";
import Layout from "./layout/Layout";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" index element={<Contact />} />
          <Route path="portfolio" index element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
