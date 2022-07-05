import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styles/nav.css";

const mql = window.matchMedia(`(min-width: 800px)`);

class Nav extends React.Component<
  {},
  { sidebarOpen: boolean; sidebarDocked: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarDocked: false,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open: boolean) {
    this.setState({ sidebarOpen: open });
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <nav className="navigation">
        <Sidebar
          sidebar={
            <div className="slide">
              <div className="title-slide">
                <span className="title-pos">Menu</span>
                <span
                  className="icon-close"
                  onClick={() => this.onSetSidebarOpen(false)}
                >
                  {" "}
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </div>
              <div className="container-links">
                <div className="container-l">
                  <Link to="/" className="link">
                    Inicio
                  </Link>
                </div>
                <div className="container-l">
                  <Link to="/ciclo-agricola" className="link">
                    Ciclo Agricola
                  </Link>
                </div>
                <div className="container-l">
                  <Link to="/estados" className="link">
                    Estados
                  </Link>
                </div>
                <div className="container-l">
                  <Link to="/municipios" className="link">
                    Municipios
                  </Link>
                </div>
                <div className="container-l">
                  <Link to="/localidades" className="link">
                    Localidades
                  </Link>
                </div>
                <div className="container-l">
                  <Link to="/" className="link">
                    Menu Item prueba
                  </Link>
                </div>
              </div>
            </div>
          }
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          pullRight={true}
          styles={{ sidebar: { background: "white", width: "300" } }}
        >
          <></>
        </Sidebar>
        <div className="logo">Precipitacion Web</div>
        <span className="btn" onClick={() => this.onSetSidebarOpen(true)}>
          <FontAwesomeIcon icon={faAlignJustify} />
        </span>
      </nav>
    );
  }
}

export default Nav;
