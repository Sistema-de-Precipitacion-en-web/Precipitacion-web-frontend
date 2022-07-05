import SweetAlert2, { SweetAlert2Props } from "react-sweetalert2";

export const Modal: React.FC<SweetAlert2Props> = ({ children, ...props }) => {
  return <SweetAlert2 {...props}>{children}</SweetAlert2>;
};
