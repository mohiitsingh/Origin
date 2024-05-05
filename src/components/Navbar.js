import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import NavTop from "./NavTop";
import MegaLinks from "./MegaLinks";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <NavTop />
        <nav className="NavbarItems">
          <h1 className="navbar-logo">ORIGIN TRIBE</h1>

          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button>
              <i class="fa-solid fa-user"></i> Sign Up
            </button>
          </ul>
        </nav>
        <MegaLinks/>
      </>
    );
  }
}

export default Navbar;
