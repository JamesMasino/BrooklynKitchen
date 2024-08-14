import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Footer, Header, Overlay } from "@components";
import { useWindowSize } from "@uidotdev/usehooks";
import { Leva } from "leva";
import "./index.css";

function Root() {
  const { width, height } = useWindowSize();

  const [isDivVisible, setIsDivVisible] = useState(false);

  const toggleDivVisibility = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <>
      <div className="leva">
        <Leva hidden={Math.min(height, width) > 767} collapsed={width < 1000} />
      </div>
      <App />
      <Header />
      <Overlay isDivVisible={isDivVisible} />
      <Footer toggleDivVisibility={toggleDivVisibility} />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
