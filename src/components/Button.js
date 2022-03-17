import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles/button.css";

const Button = (props) => (
  <Link className="button" to={props.to}>
    {props.title}
    <FontAwesomeIcon icon={props.icon} size={props.size} />
  </Link>
);

export default Button;
