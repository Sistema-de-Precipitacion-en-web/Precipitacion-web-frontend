import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./styles/nav.css";

this.addEventListener('DOMContentLoaded', () => {
const btn = document.querySelector('.btn')  
if (btn)  {
  btn.addEventListener('click', () => {
    const menu_items = document.querySelector('.menu_items')
    menu_items.classList.toggle('show')
  })
}
});


function Nav() {
  return (
    <nav className="navigation">
      <label className="logo" >Precipitación Web</label>
      <ul className="menu_items">
        <li><Link to="/" className="link">Precipitación</Link></li>
        <li><Link to="/" className="link">Ciclo Agricola</Link></li>
        <li><Link to="/" className="link">Municipios</Link></li>
        <li><Link to="/" className="link">Localidades</Link></li>
      </ul>
      <span className="btn">
        <FontAwesomeIcon  icon={faAlignJustify} /> 
      </span>
    </nav>
  );
}

export default Nav;
