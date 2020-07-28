import React from "react";
import Logo from "../../assets/Logo.png";
import "./Menu.css";
import Button from "../Button";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Marflix logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
