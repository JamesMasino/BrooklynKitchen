import "./overlay.css";

export function Overlay({ isCredVisible, isTitlesVisible }) {
  return (
    <div className="screen">
      <div className="columnContainer">
        <div className="largeColumn">
          {isTitlesVisible && (
            <div className="block">
              <span className="title">
                It's about the <span className="styleText">little</span> moments
              </span>
            </div>
          )}
          {isTitlesVisible && (
            <div className="block">
              <span className="subTitle">MAUVE x DR. COFFEE</span>
            </div>
          )}
        </div>
        <div className="smallColumn">
          {isCredVisible && (
            <div className="model">
              <h1>What is this?</h1>
              <p>
                Welcome to Brooklyn Kitchen! A React Three Fiber scene with a
                lot of meshes and extensively curated texture maps. Meant to
                show off scale and capability of what's possible, Brooklyn
                Kitchen is a spec web advertisement designed by MAUVE, a
                Brooklyn, New York based creative studio.
              </p>
              <h1>Credits</h1>
              <p>
                Brooklyn Kitchen is powered by{" "}
                <a href="https://github.com/SystemStack/nitro-cold-brew">
                  NitroColdBrew
                </a>
                , an open-source framework using React Three Fiber put together
                by <a href="https://github.com/SystemStack">Levi Broadnax</a>.
              </p>
              <p>
                All 3D models, textures, lighting, front-end UI elements, and
                overall art direction is created by{" "}
                <a href="https://jamesmasino.com/">James Masino</a> at MAUVE.
              </p>
              <h1>Contact</h1>
              <p>
                Considering this medium for your brand or ad? You're in the
                right place.
              </p>
              <button className="footerButton">mauve.film ➡</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
