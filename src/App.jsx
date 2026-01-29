import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import BodyWrapper from "./layouts/BodyWrapper/BodyWrapper.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Archive from "./pages/archive/Archive.jsx";
import GoldenShield2026 from "./pages/posts/CompCSC_20260109.jsx";

import "./App.css";

// 代辦，這四個 component 尚未實作
const Home = () => <h2>這是首頁內容</h2>;
const About = () => <h2>關於我</h2>;
const Contact = () => <h2>聯繫我</h2>;

function App() {
  /* Ties all component together */
  return (
    <div className="appContainer">
      <Header />

      <Routes>
        <Route path="/" element={<BodyWrapper />}>
          <Route index element={<Home />} />
          <Route path="archive" element={<Archive />} />
          <Route
            path="posts/CompCSC_20260109.jsx"
            element={<GoldenShield2026 />}
          />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* <BodyWrapper /> */}

      <Footer />
    </div>
  );
}

export default App;
