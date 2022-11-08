import "../css/NavBar.css";
import logo from "../assets/logo.png";
import { Children } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

export default function NavBar() {
  const navigate = useNavigate();

  const styles = { fontSize: "1.5rem" };
  const path = window.location.pathname;

  const [logoutModal, setLogoutModal] = useState();
  const [cartModal, setCartModal] = useState();

  let activeUser = sessionStorage.getItem("username");

  const toCart = () => {
    navigate("/CartPage");
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Top Mart <img src={logo} alt="logo"></img>
        </Link>
        <ul>
          <CustomLink to="/AllProducts">Products</CustomLink>
          <CustomLink to="/Upload">Upload Product</CustomLink>
          <CustomLink to="/SignUp">
            <FiLogOut to="/SignUp" style={styles} id="logoutText" />
          </CustomLink>
          <CustomLink to="/CartPage">
            <AiOutlineShoppingCart style={styles} />
          </CustomLink>
        </ul>
      </nav>
      {cartModal}
      {logoutModal}
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
