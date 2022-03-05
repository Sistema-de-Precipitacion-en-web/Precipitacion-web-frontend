import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

function Nav() {
  return (
    <nav className="navbar  color-nav ">
      <div className="container-fluid">
        <a className="title-text" href="/">
          Sistema de recipitación web
        </a>
        <FontAwesomeIcon
          icon={faAlignJustify}
          size="2x"
          className="icon-menu"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        />
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li
                className="li-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <NavLink
                  className={(isActive) => (isActive ? "activeLink" : "")}
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li
                className="li-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <NavLink
                  className={(isActive) => (isActive ? "activeLink" : "")}
                  to="/precipitacion"
                >
                  Precipitación
                </NavLink>
              </li>
              <li
                className="li-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <NavLink
                  className={(isActive) => (isActive ? "activeLink" : "")}
                  to="/productores"
                >
                  Productores
                </NavLink>
              </li>
              <li
                className="li-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <NavLink
                  className={(isActive) => (isActive ? "activeLink" : "")}
                  to="/cicloAgricola"
                >
                  Ciclo agrícola
                </NavLink>
              </li>
              <li
                className="li-menu"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
              >
                <NavLink
                  className={(isActive) => (isActive ? "activeLink" : "")}
                  to="/"
                >
                  Localidad
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
