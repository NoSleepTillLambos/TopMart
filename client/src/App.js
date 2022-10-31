import "./App.css";
import NavBar from "./components/NavBar";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Link, Routes, Route, Router } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
