import Navbar from "./components/Navbar";
import "./App.css";
import Caraousel from "./components/Caraousel";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Blog from "./routes/Blog";
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import OurClient from "./components/OurClient";
import BlogPost from "./components/BlogPost";
import Testimonial from "./components/Testimonial";
import ChooseUs from "./components/ChooseUs";
import ProductCard from "./components/Product/ProductCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
      </Routes>
      <Caraousel />
      <Section1 />
      <ProductCard/>
      <Testimonial />
      <ChooseUs />
      <BlogPost />
      <OurClient />
      <Footer />
    </div>
  );
}

export default App;
