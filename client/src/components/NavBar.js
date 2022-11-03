import "../css/NavBar.css";
import logo from "../assets/logo.png";
import { Children } from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import Logout from "./LogoutModal";

export default function NavBar() {
  const path = window.location.pathname;

  const [logoutModal, setLogoutModal] = useState();
  const [cartModal, setCartModal] = useState();

  let activeUser = sessionStorage.getItem("name");

  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-title">
          Top Mart <img src={logo} alt="logo"></img>
        </Link>
        <ul>
          <CustomLink to="/AllProducts">Products</CustomLink>
          <CustomLink to="/Upload">Upload Product</CustomLink>
          <CustomLink to="/SignUp">Sign Up</CustomLink>
          <div className="cart"></div>
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
