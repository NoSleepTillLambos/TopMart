import "./App.css";
import NavBar from "./components/NavBar";
import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import IndividualClub from "./pages/IndividualClub";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/IndividualClub" element={<IndividualClub />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
