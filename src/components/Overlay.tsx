import { Logo } from "./Logo";
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
              <div className="subTitle">
                <Logo />
              </div>
            </div>
          )}
        </div>
        <div className="smallColumn">
          {isCredVisible && (
            <div className="model">
              <h1>What is this?</h1>
              <p>
                Welcome to Brooklyn Kitchen! A (work in progress) React Three
                Fiber scene with a lot of meshes and texture maps. Meant to show
                off scale and capability, Brooklyn Kitchen is a spec web
                advertisement designed by MAUVE, a creative partnership that
                focuses on preproduction services for feature films and ads
                based in NYC.
              </p>
              <h1>Credits</h1>
              <p>
                Brooklyn Kitchen is powered by{" "}
                <a href="https://github.com/SystemStack/nitro-cold-brew">
                  NitroColdBrew
                </a>
                , put together by{" "}
                <a href="https://github.com/SystemStack">Levi Broadnax</a>,
                which in itself is an open-source webGL experiment.
              </p>
              <p>
                All 3D models, textures, lighting, and front-end UI elements are
                created by <a href="https://jamesmasino.com/">James Masino</a>{" "}
                of MAUVE. Creative direction by{" "}
                <a href="https://www.maeganmann.com/">Mae Mann</a> of MAUVE.
              </p>
              <h1>Contact</h1>
              <p>
                Considering this medium for your brand or ad? You're in the
                right place.
              </p>
              <a href="mailto:james@masino.art">james@masino.art</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
