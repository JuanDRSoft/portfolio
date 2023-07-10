import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/Layout.css";
import "./styles/Experience.css";
import "./styles/Skills.css";
import Layout from "./layout/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import { Provider } from "./context/Provider";

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" index element={<Contact />} />
            <Route path="portfolio" index element={<Portfolio />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
