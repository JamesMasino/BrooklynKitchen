import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Footer, Header, Overlay } from "@components";
import { useWindowSize } from "@uidotdev/usehooks";
import { Leva } from "leva";
import "./index.css";

function Root() {
  const { width, height } = useWindowSize();

  const [isCredVisible, setIsCredVisible] = useState(false);
  const [isTitlesVisible, setIsTitlesVisible] = useState(true);

  const toggleCredVisibility = () => {
    setIsCredVisible(!isCredVisible);
  };
  const toggleTitlesVisibility = () => {
    setIsTitlesVisible(!isTitlesVisible);
  };

  return (
    <>
      <div className="leva">
        <Leva hidden={Math.min(height, width) > 0} collapsed={width < 1000} />
        {/* 767 */}
      </div>
      <App />
      <Header />
      <Overlay
        isCredVisible={isCredVisible}
        isTitlesVisible={isTitlesVisible}
      />
      <Footer
        toggleCredVisibility={toggleCredVisibility}
        toggleTitlesVisibility={toggleTitlesVisibility}
      />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
