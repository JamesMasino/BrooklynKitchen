import { useToggle } from "@uidotdev/usehooks";
import { MouseEvent, useEffect } from "react";
import "./overlay.css";

export function Overlay() {
  const [darkTheme, toggleDarkTheme] = useToggle(false);

  useEffect(() => {
    const { style } = document.documentElement;
    style.setProperty("color-scheme", darkTheme ? "light" : "dark");
  }, [darkTheme]);

  function onThemeClick(ev: MouseEvent) {
    ev.preventDefault();
    ev.stopPropagation();
    toggleDarkTheme();
  }

  return (
    <div className="screen">
      <div className="largeColumn">
        <div className="block">
          <span className="title">
            It's about the <span className="styleText">little</span> moments
          </span>
        </div>
        <div className="block">
          <span className="subTitle">MAUVE x DR. COFFEE</span>
        </div>
      </div>
      <div className="smallColumn"></div>
    </div>
  );
}
