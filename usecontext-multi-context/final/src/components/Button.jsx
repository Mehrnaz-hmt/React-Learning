import { useContext } from "react";


export default function Button({ children, disabled, onClick, theme }) {
  const className = "button-" + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
