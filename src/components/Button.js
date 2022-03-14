import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "./styles/button.css";

const Button = (props) => (
  <NavLink className="button" to={props.to}>
    {props.title}
    <FontAwesomeIcon icon={props.icon} size={props.size} />
  </NavLink>
);

export default Button;
