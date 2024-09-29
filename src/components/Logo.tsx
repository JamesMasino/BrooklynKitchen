import "./logo.css";
import { default as logo } from "/mauveLogoWhite.svg";

export function Logo() {
  return (
    <div className="logo">
      <img src={logo} />
    </div>
  );
}
