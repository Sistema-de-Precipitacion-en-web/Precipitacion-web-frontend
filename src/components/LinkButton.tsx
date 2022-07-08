import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./styles/button.css";

interface Props {
  variant?: string;
  to: string;
  title: string;
  icon: IconProp;
  size: SizeProp;
}

const LinkButton = ({ variant = "default", to, title, icon, size }: Props) => (
  <Link className={variant} to={to}>
    {title}
    <FontAwesomeIcon icon={icon} size={size} />
  </Link>
);

export default LinkButton;
