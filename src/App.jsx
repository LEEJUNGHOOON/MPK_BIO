// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

export default function App() {
  // 카카오맵 API 키 로드 확인
  console.log("Kakao Map Key:", import.meta.env.VITE_KAKAOMAP_KEY);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
